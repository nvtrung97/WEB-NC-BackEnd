var jwt = require('jsonwebtoken');
module.exports = {
    verifyToken: function (req, res, next) {
        let tokenHeader = req.header('authorization');
        if (tokenHeader != null) tokenHeader = tokenHeader.split(' ')[1];
        const tokenUri = req.params.token;
        if (!tokenHeader && tokenUri) {
            try {
                const decode = jwt.verify(tokenUri, process.env.SECRECT_KEY);
                req.userId = decode.id;
                next();
            } catch (err) {
                res.status(401).json({ status: 401, message: 'message is not valid' });
            }
        } else if (tokenHeader && !tokenUri) {
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
}