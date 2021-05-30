var jwt = require('jsonwebtoken');
module.exports = {
    verifyToken: function (req, res, next) {
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            try {
                const { auth } = jwt.verify(tokenUri, process.env.SECRECT_KEY);
                req.user = auth;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else if (tokenHeader && !tokenUri) {
            try {
                const { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY);
                req.user = auth;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else {
            return res.status(401).json({ status: 401, message: 'No Token, Authorization Denied' });
        }
    },
    verifyTokenExpiration: function (req, res, next) {
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            try {
                let { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY, {
                    ignoreExpiration: true
                });
                req.user = auth;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else if (tokenHeader && !tokenUri) {
            try {
                let { auth } = jwt.verify(tokenHeader, process.env.SECRECT_KEY, {
                    ignoreExpiration: true
                });
                req.user = auth;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else {
            return res.status(401).json({ status: 401, message: 'No Token, Authorization Denied' });
        }
    },
}