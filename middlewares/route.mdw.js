
module.exports = async (app) => {
    app.use('/api/v1/auth', require('../routes/auth.route'));
   // app.use('/api/v1/users', require('../routes/user.route'));
};