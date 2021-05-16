const auth = require('../routes/auth.route');
module.exports = (app) => {
    app.use('/auth', auth);
};