
module.exports = (app) => {
    app.use('/api/v1/auth', require('../routes/auth.route'));
    app.use('/api/v1/categories', require('../routes/category.route'));
    app.use('/api/v1/products', require('../routes/product.route'));
    app.use('/api/v1/users', require('../routes/user.route'));
    app.use('/api/v1/reviews', require('../routes/review.route'));
};