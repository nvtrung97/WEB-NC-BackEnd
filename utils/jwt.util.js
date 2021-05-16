var jwt = require('jsonwebtoken');

module.exports = {

    generateToken(auth, expires) {
        return jwt.sign(
            {
                email: auth.email,
                role: auth.role
            },
            process.env.SECRECT_KEY_JWT,
            {
                algorithm: "HS256",
                expiresIn: expires
            }
        );
    },

    verifyToken(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, process.env.SECRECT_KEY_JWT, (error, decoded) => {
                if (error) {
                    return reject(error);
                }
                resolve(decoded);
            });
        });
    },

    // async refreshToken(req, res, next) {
    //     var { accessToken, refreshToken, deviceId } = req.body;
    //     accessToken = accessToken.split(' ')[1];
    //     var { userId } = jwt.verify(accessToken, process.env.SECRECT_KEY, {
    //         ignoreExpiration: true
    //     });
    //     const ret = await userDeviceModel.isValidRFToken(userId, deviceId, refreshToken);
    //     if (ret === true) {
    //         var auth = {
    //             id: userId
    //         };
    //         var access_token = createToken(auth);
    //         var newAccessToken = {};
    //         newAccessToken.token = access_token;
    //         newAccessToken.tokenType = 'Bearer';
    //         const decode = jwt.verify(access_token, process.env.SECRECT_KEY);
    //         newAccessToken.expiresAt = decode.exp;
    //         return res.status(200).send(newAccessToken);
    //     }
    //     return res.status(400).send({
    //         message: 'Refresh token is revoked!'
    //     });
    // }
}