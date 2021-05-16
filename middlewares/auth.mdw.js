const jwt = require('../utils/jwt.util');

module.exports = {
    async verify(req, res, next) {
        const token = req.header('authorization').split(' ')[1] || req.body.token || req.query.token;
        if (token) {
            try {
                const data = await jwt.verifyToken(token);
                req.jwtDecoded = data;
                next();
            } catch (err) {
                console.log(err);
                return res.status(401).json(
                    {
                        message: 'Unauthorized.',
                    }
                );
            }
        } else {
            return res.status(403).send(
                {
                    message: 'Token not found.',
                }
            );
        }
    }
}
        // var token = req.header('authorization');
        // if (token != null) token = token.split(' ')[1];
        // const tokenUri = req.params.token;
        // if (!tokenHeader && tokenUri) {
        // try {
        //         const decode = jwt.verify(token, process.env.SECRECT_KEY_JWT);
        //         req.email = decode.email;

        //         next();
        //     } catch (err) {
        //         res.status(401).json({ status: 401, message: 'message is not valid' });
        //     }
        // } else if (tokenHeader && !tokenUri) {
        //     try {
        //         const decode = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
        //         req.userId = decode.userId;
        //         next();
        //     } catch (err) {
        //         res.status(401).json({ status: 401, message: 'message is not valid' });
        //     }
        // } else {
        //     return res.status(401).json({ status: 401, message: 'No Token, Authorization Denied' });
        // }
    // },
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