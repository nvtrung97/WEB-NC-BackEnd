var jwt = require('jsonwebtoken');
var userModel = require('../models/user.model');
module.exports = {
    verifyRoleAdmin(req, res, next) {
        let user = req.user;
        console.log(user.role);
        if (user.role != 2) {
            res.status(401).json({
                status: 401,
                message: '[Permission]: You dont have permission to access this API'
            });
        }
        next();
    },
    verifyRoleLecturers(req, res, next) {
        let user = req.user;
        if (user.role != 1); {
            res.status(401).json({
                status: 401,
                message: '[Permission]: You dont have permission to access this API'
            });
        }
        next();
    },
    async verifyToken(req, res, next) {
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            try {
                const { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
                let user = await userModel.findById(auth.user_id)
                if (user.deleted != 0)
                    res.status(401).json({
                        status: 401,
                        message: 'User is not existed'
                    });
                else {
                    req.user = auth;
                    next();
                }
            } catch (err) {
                res.status(401).json({
                    status: 401,
                    message: 'Token is not valid'
                });
            }
        } else if (tokenHeader && !tokenUri) {
            try {
                const { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
                let user = await userModel.findById(auth.user_id)
                if (user.deleted != 0)
                    res.status(401).json({
                        status: 401,
                        message: 'User is not existed'
                    });
                else {
                    req.user = auth;
                    next();
                }
            } catch (err) {
                res.status(401).json({
                    status: 401,
                    message: 'Token is not valid'
                });
            }
        } else {
            return res.status(401).json({
                status: 401,
                message: 'No Token, Authorization Denied'
            });
        }
    },
    async verifyTokenExpiration(req, res, next) {
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            try {
                let { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY, {
                    ignoreExpiration: true
                });
                let user = await userModel.findById(auth.user_id)
                if (user.deleted != 0)
                    res.status(401).json({
                        status: 401,
                        message: 'User is not existed'
                    });
                else {
                    req.user = auth;
                    next();
                }
            } catch (err) {
                res.status(401).json({
                    status: 401,
                    message: 'Token is not valid'
                });
            }
        } else if (tokenHeader && !tokenUri) {
            try {
                let { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY, {
                    ignoreExpiration: true
                });
                if (userModel.findById(auth._id).deleted != 0)
                    res.status(401).json({
                        status: 401,
                        message: 'User is not existed'
                    });
                else {
                    req.user = auth;
                    next();
                }
            } catch (err) {
                res.status(401).json({
                    status: 401,
                    message: 'Token is not valid'
                });
            }
        } else {
            return res.status(401).json({
                status: 401,
                message: 'No Token, Authorization Denied'
            });
        }
    },
}