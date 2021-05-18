
module.exports = (app) => {
    app.use('/api/v1/auth', require('../routes/auth.route'));
    app.use('/api/v1/category', require('../routes/category.route'));
    // app.use('/api/v1/users', require('../routes/user.route'));
};