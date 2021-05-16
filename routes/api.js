let jwt = require('../middlewares/auth.mdw');
module.exports = function (app) {
    app.use('/api/v1', require('./auth.route'));
    app.use('/api/v1/users', require('./user.route'));
};