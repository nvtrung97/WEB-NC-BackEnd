const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');

module.exports = {
    async signup(req, res) {
        req.body.password = bcrypt.hashSync(req.body.password, 5);
        const user = req.body;
        const userCheck = await userModel.findByEmail(user.email);
        if (userCheck != null) {
            res.status(400).json({
                message: 'Sign up error. Email already exists.'
            });
        } else {
            const id = await userModel.save(user);
            res.status(201).json({
                message: 'Sign up success.'
            });
        }
    },

    async signin(req, res) {
        if (req.body.username && req.body.password) {
            const userCheck = await userModel.findByEmail(user.email);
            if (userCheck != null) {
                const result = bcrypt.compareSync(req.body.password, userCheck.password);
                if (result) {
                    const auth = { email: userCheck.email, role: userCheck.role };
                    var token = await jwt.generateToken(auth, '5d');
                    res.status(200).json({
                        message: 'Sign in success.',
                        token: token
                    });
                } else {
                    res.status(400).json({
                        message: 'Sign in error. Email or Password incorrect.',
                    });
                }
            } else {
                res.status(400).json({
                    message: 'Sign in error. Email does not exist.',
                });
            }
        } else {
            res.status(400).json({
                message: 'Sign in error. Email or Password null.',
            });
        }
    }
}