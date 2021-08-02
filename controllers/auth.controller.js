var _ = require('lodash');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
let userModel = require('../models/user.model');
var uuid = require('uuid');
var otpGenerator = require('otp-generator')
var email = require('../services/email.service');
let jwt = require('../utils/jwt.util');
const bcrypt = require('bcryptjs');
const config = require('../config/default.json');
module.exports = {
    signin: async (req, res) => {
        let loginType = req.body.login_type;
        if (loginType == 'auth') {
            // xử lí login tài khoản mật khẩu bình thường 
            const user = await userModel.findByEmail(req.body.email);
            if (user.length == 0)
                return res.status(400).json({
                    message: 'Sign in error. Email does not exist.'
                });
            else if (user[0].email_confirmed == false)
                return res.status(400).json({
                    message: 'Sign in error. Email does not exist.'
                });
            if (user.length != 0) {
                let isDeleted = await userModel.findByEmailInDB(req.body.email)
                if (isDeleted.deleted == 1) {
                    return res.status(403).json({
                        message: 'user don"t allow login'
                    });
                }
            }

            if (bcrypt.compareSync(req.body.password, user[0].password)) {
                const auth = {
                    user_id: user[0]._id,
                    role: user[0].role
                };
                let token = jwt.generateToken(auth, '30d');
                let refreshToken = uuid.v4();
                await userModel.updateById(user[0]._id, { rf_token: refreshToken });
                return res.status(201).json({
                    accessToken: 'Bearer ' + token,
                    refreshToken: refreshToken,
                    user: {
                        user_id: user[0]._id,
                        full_name: user[0].full_name,
                        email: user[0].email,
                        avatar_url: user[0].avatar_url || config.URL_LOGO_USER,
                        role: user[0].role,
                    }
                });
            }
            return res.status(400).json({
                message: 'Sign in error. Password incorrect.'
            });
        }
        else if (loginType == 'google') {
            // xử lí đăng nhập gg google
            client.verifyIdToken({ idToken: req.body.token_id, audience: process.env.GOOGLE_AUTH_CLIENT_ID })
                .catch(() => {
                    return res.status(405).json({
                        message: 'login failed'
                    })
                })
                .then(async (response) => {
                    let users = await userModel.findByEmailIgnoreDeleted(response.payload.email);
                    let dataUserResponse = {
                        full_name: response.payload.name,
                        email: response.payload.email,
                        avatar_url: response.payload.picture

                    };
                    let refreshToken = uuid.v4();
                    if (users.length == 0) {
                        var entity = {
                            email: response.payload.email,
                            password: uuid.v4(),
                            full_name: response.payload.name,
                            avatar_url: response.payload.picture,
                            rf_token: refreshToken,
                            email_confirmed: true
                        }
                        let newUser = await userModel.save(entity);
                        dataUserResponse.user_id = newUser[0]._id;
                        dataUserResponse.role = 0;
                    }
                    else {
                        if (users[0].deleted == 1)
                            return res.status(400).json({
                                status: 400,
                                message: 'Refuse to login'
                            })
                        dataUserResponse.role = users[0].role;
                        dataUserResponse.user_id = users[0]._id;
                        await userModel.updateById(users[0]._id, { rf_token: refreshToken, email_confirmed: true })
                    }

                    const auth = { user_id: dataUserResponse.user_id, role: 0 };
                    let token = jwt.generateToken(auth, '30d');
                    return res.status(201).json({ accessToken: 'Bearer ' + token, refreshToken: refreshToken, user: dataUserResponse });
                })
        } else
            return res.status(400).json({
                status: 400,
                message: 'Refuse to login'
            })
    },

    signup: async (req, res, next) => {
        let user = await userModel.findByEmail(req.body.email);
        req.body.password = bcrypt.hashSync(req.body.password, Number(process.env.KEY_PASSWORD));
        if (user.length != 0) {
            if (user[0].email_confirmed)
                return res.status(400).json({
                    message: 'Sign up error. Email already exists.'
                });
            else
                await userModel.updateById(user[0]._id, req.body);
        } else await userModel.save(req.body);
        // tài khoản có mà chưa xác nhận sẽ gửi mail lại OTP hoặc đăng kí mới cũng vậy
        let OTP = otpGenerator.generate(6, { alphabets: true });
        const resultSent = await email.sendMail(req.body.email, `Your OTP is ${OTP} \n Kí tên \n Nguyễn Văn Trung`, 'Email confirmation from online course');
        let auth = { email: req.body.email, OTP_hash: bcrypt.hashSync(OTP, Number(process.env.KEY_PASSWORD)) };
        let tokenOTP = jwt.generateToken(auth, '1d');
        res.status(201).json({ email_confirmed: false, token_otp: tokenOTP });
    },

    refresh: async (req, res, next) => {
        let { refreshToken } = req.body;
        const ret = await userModel.isValidRFToken(req.user.user_id, refreshToken);
        if (ret === true) {
            let access_token = jwt.generateToken(req.user);
            return res.status(200).send({
                accessToken: 'Bearer ' + access_token
            });
        }
        return res.status(400).send({
            message: 'Refresh token is revoked!'
        });
    },

    verifyOTP: async (req, res, next) => {
        let { email, OTP_hash } = req.user;
        if (bcrypt.compareSync(req.body.otp, OTP_hash)) {
            await userModel.updateByEmail({ email_confirmed: true }, email);
            return res.status(201).json({
                message: 'Successful account registration.'
            });
        } else
            return res.status(404).json({
                message: 'Wrong OTP'
            });
    },

    authTest: async (req, res) => {
        const auth = {
            user_id: 1,
            role: 0
        };
        let token = jwt.generateToken(auth, '30d');
        let refreshToken = uuid.v4();
        return res.status(201).json({
            accessToken: 'Bearer ' + token,
            refreshToken: refreshToken
        });
    }
}