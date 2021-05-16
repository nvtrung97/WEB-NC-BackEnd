var jwt = require('jsonwebtoken');
var createToken = function (_id, expires) {
    return jwt.sign({
        id: _id
    }, process.env.SECRECT_KEY,
        {
            expiresIn: expires
        });
};
module.exports = {
    generateToken: function (auth, expires) {
        token = createToken(auth, expires);
        return token;
    },
    verifyToken: function (req, res, next) {
        //get Token from header
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            //verify token
            try {
                const decode = jwt.verify(tokenUri, process.env.SECRECT_KEY);
                req.userId = decode.userId;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else if (tokenHeader && !tokenUri) {
            //verify token
            try {
                const decode = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
                req.userId = decode.userId;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else {
            return res.status(401).json({ status: 401, message: 'No Token, Authorization Denied' });
        }
    },
    refreshToken: async (req, res, next) => {
        // sửa lại... 
        let { accessToken, refreshToken, deviceId } = req.body;
        accessToken = accessToken.split(' ')[1];
        let { userId } = jwt.verify(accessToken, process.env.SECRECT_KEY, {
            ignoreExpiration: true
        });
        const ret = await userDeviceModel.isValidRFToken(userId, deviceId, refreshToken);
        if (ret === true) {
            let auth = {
                id: userId
            };
            let access_token = createToken(auth);
            let newAccessToken = {};
            newAccessToken.token = access_token;
            newAccessToken.tokenType = 'Bearer';
            const decode = jwt.verify(access_token, process.env.SECRECT_KEY);
            newAccessToken.expiresAt = decode.exp;
            return res.status(200).send(newAccessToken);
        }
        return res.status(400).send({
            message: 'Refresh token is revoked!'
        });
    }
};