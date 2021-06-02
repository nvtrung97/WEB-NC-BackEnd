var jwt = require('jsonwebtoken');

module.exports = {
    generateToken(auth, expires) {
        return jwt.sign({
            auth: auth
        }, process.env.SECRECT_KEY,
            {
                expiresIn: expires
            });
    }
}