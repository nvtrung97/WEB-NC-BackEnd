// var _ = require('lodash');
// const { OAuth2Client } = require('google-auth-library');
// const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);
// let userModel = require('../models/user.model');
// var uuid = require('uuid');
// let jwt = require('../middlewares/auth.mdw');
// module.exports = {
//     login: async (req, res, next) => {
//         if (req.body.login_type == 'auth') {
//             // xử lí login tài khoản mật khẩu bình thường
//         } else if (req.body.login_type == 'google') {
//             // xử lí đăng nhập gg google
//             client.verifyIdToken({ idToken: req.body.token_id, audience: process.env.GOOGLE_AUTH_CLIENT_ID }).catch(() => {
//                 return res.status(405).send({ message: 'login failed' })
//             }).then(async (response) => {
//                 let users = userModel.findByEmail(response.payload.email);
//                 let dataUserResponse = { user_id: 0, full_name: esponse.payload.name, email: response.payload.email, avatar_url: esponse.payload.picture };
//                 let refreshToken = uuid.v4();
//                 if (users.length == 0) {
//                     var entity = {
//                         email: response.payload.email,
//                         password: uuid.v4(),
//                         name: response.payload.name,
//                         avatar_url: response.payload.picture,
//                         rf_token: refreshToken
//                     }
//                     let newUser = await userModel.create(entity);
//                     dataUserResponse.user_id = newUser[0]._id;
//                 } else {
//                     dataUserResponse.user_id = users[0]._id;
//                     await userModel.updateByUserId({ rf_token: refreshToken }, users[0]._id)
//                 }
//                 let token = jwt.generateToken(dataUserResponse.user_id, 864000);
//                 return res.status(201).send({ accessToken: token, refreshToken: refreshToken, user: dataUserResponse });
//             })
//         }
//         return res.status(400).send({ status: 400, message: 'Refuse to login' })
//     },

//     signup: async (req, res, next) => {

//     },
//     refresh: async (req, res, next) => {
//     }
// }