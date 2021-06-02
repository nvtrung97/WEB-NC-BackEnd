
module.exports = (app) => {
    app.use('/api/v1/auth', require('../routes/auth.route'));
    app.use('/api/v1/categories', require('../routes/category.route'));
    app.use('/api/v1/products', require('../routes/product.route'));
    app.use('/api/v1/users', require('../routes/user.route'));
    app.use('/api/v1/reviews', require('../routes/review.route'));
    app.use('/api/v1/admin/categories',/* bỏ middleware validate check admin*/ require('../routes/category.route'));
    app.use('/api/v1/admin/products',/* bỏ middleware validate check admin*/ require('../routes/product.route'));
    app.use('/api/v1/admin/users',/* bỏ middleware validate check admin*/ require('../routes/user.route'));
};