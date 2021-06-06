module.exports = (app) => {
    app.use('/api/v1/auth', require('../routes/auth.route'));
    app.use('/api/v1/categories', require('../routes/category.route'));
    app.use('/api/v1/products', require('../routes/product.route'));
    app.use('/api/v1/users', require('../routes/user.route'));
    app.use('/api/v1/profiles', require('../routes/profile.route'));
    app.use('/api/v1/reviews', require('../routes/review.route'));
    app.use('/api/v1/admin/categories', require('./auth.mdw').verifyToken/* cần check admin */, require('../routes/admin/category.admin.route'));
    app.use('/api/v1/admin/products', require('./auth.mdw').verifyToken/* cần check admin */, require('../routes/admin/product.admin.route'));
    app.use('/api/v1/admin/users', require('./auth.mdw').verifyToken/* cần check admin */, require('../routes/admin/user.admin.route'));
};