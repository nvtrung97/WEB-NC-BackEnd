
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
        if (req.body.login_type == 'auth') {
            // xử lí login tài khoản mật khẩu bình thường 
            const user = await userModel.findByEmail(req.body.email);
            if (user.length == 0 || (user.length != 0 && user.email_confirmed == false)) return res.status(400).json({ message: 'Sign in error. Email does not exist.', });
            if (bcrypt.compareSync(req.body.password, user[0].password)) {
                const auth = { user_id: user[0]._id, role: user[0].role };
                let token = jwt.generateToken(auth, '3d');
                let refreshToken = uuid.v4();
                await userModel.updateByUserId({ rf_token: refreshToken }, user[0]._id);
                return res.status(201).json({ accessToken: 'Bearer ' + token, refreshToken: refreshToken, user: { user_id: user[0]._id, full_name: user[0].full_name, email: user[0].email, avatar_url: user[0].avatar_url || config.URL_LOGO_USER } });
            }
            return res.status(400).json({ message: 'Sign in error. Password incorrect.', });
        } else if (req.body.login_type == 'google') {
            // xử lí đăng nhập gg google
            client.verifyIdToken({ idToken: req.body.token_id, audience: process.env.GOOGLE_AUTH_CLIENT_ID }).catch(() => {
                return res.status(405).json({ message: 'login failed' })
            }).then(async (response) => {
                let users = await userModel.findByEmail(response.payload.email);
                let dataUserResponse = { user_id: 0, full_name: response.payload.name, email: response.payload.email, avatar_url: response.payload.picture };
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
                    let newUser = await userModel.create(entity);
                    dataUserResponse.user_id = newUser[0]._id;
                } else {
                    dataUserResponse.user_id = users[0]._id;
                    await userModel.updateByUserId({ rf_token: refreshToken, email_confirmed: true }, users[0]._id)
                }
                const auth = { user_id: dataUserResponse.user_id, role: 0 };
                let token = jwt.generateToken(auth, '3d');
                return res.status(201).json({ accessToken: 'Bearer ' + token, refreshToken: refreshToken, user: dataUserResponse });
            })
        } else
            return res.status(400).json({ status: 400, message: 'Refuse to login' })
    },

    signup: async (req, res, next) => {
        let user = await userModel.findByEmail(req.body.email);
        req.body.password = bcrypt.hashSync(req.body.password, Number(process.env.KEY_PASSWORD));
        if (user.length != 0) {
            if (user.email_confirmed)
                return res.status(400).json({ message: 'Sign up error. Email already exists.', });
            else
                await userModel.updateByUserId(req.body, user[0]._id);
        } else await userModel.create(req.body);
        // tài khoản có mà chưa xác nhận sẽ gửi mail lại OTP hoặc đăng kí mới cũng vậy
        let OTP = otpGenerator.generate(6, { alphabets: true });
        const resultSent = await email.sendMail(req.body.email, `Your OTP is ${OTP} \n Kí tên \n Nguyễn Văn Trung`, 'Email confirmation from online course');
        let auth = { email: req.body.email, OTP_hash: bcrypt.hashSync(OTP, Number(process.env.KEY_PASSWORD)) };
        let tokenOTP = jwt.generateToken(auth, '30s');
        res.status(201).json({ email_confirmed: false, token_otp: tokenOTP });
    },
    refresh: async (req, res, next) => {
        let { refreshToken } = req.body;
        const ret = await userModel.isValidRFToken(req.user.user_id, refreshToken);
        if (ret === true) {
            let access_token = jwt.generateToken(req.user);
            return res.status(200).send({ accessToken: 'Bearer ' + access_token });
        }
        return res.status(400).send({
            message: 'Refresh token is revoked!'
        });
    },
    verifyOTP: async (req, res, next) => {
        let { email, OTP_hash } = req.user;
        if (bcrypt.compareSync(req.body.otp, OTP_hash)) {
            await userModel.updateByEmail({ email_confirmed: true }, email);
            return res.status(201).json({ message: 'Successful account registration.' });
        } else
            return res.status(404).json({ message: 'Wrong OTP' });
    }
}