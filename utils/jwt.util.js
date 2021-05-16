var jwt = require('jsonwebtoken');

module.exports = {
    generateToken(_id, expires) {
        return jwt.sign({
            id: _id
        }, process.env.SECRECT_KEY,
            {
                expiresIn: expires
            });
    },
}