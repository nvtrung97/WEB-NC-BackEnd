const productModel = require('../models/product.model');
const userModel = require('../models/user.model');


module.exports = {

    async productOfCategory(req, res) {
        const categoryId = req.query.category_id || 0;
        const limit = req.query.limit || 12;
        const page = req.query.page || 1;
        var list = await productModel.getProductOfCategory(categoryId, limit, page);
        res.json(list);
    },

    async highlightOfWeek(req, res) {
        const limit = req.query.limit || 4;
        var list = await productModel.getHighlightOfWeek(limit);
        res.json(list);
    },

    async mostOfView(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getMostOfView(limit);
        res.json(list);
    },

    async mostOfCategory(req, res) {
        const limit = req.query.limit || 5;
        const categoryId = req.query.category_id || 0;
        var list = await productModel.getMostOfCategory(categoryId, limit);
        res.json(list);
    },

    async latestProduct(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getLastestProduct(limit);
        res.json(list);
    },

    async searchProduct(req, res) {
        const keyword = req.query.keyword || '';
        const type = req.query.type || 'name';
        const limit = req.query.limit || 10;
        const page = req.query.page || 1;
        const order = req.query.order || 'desc';
        var list = await productModel.searchProduct(keyword, type, limit, page, order);
        res.json(list);
    },

    async detailProduct(req, res) {
        const id = req.params.id || 0;
        var product = await productModel.findById(id);
        // res.json({ ...product, author: user });
        res.json(product);
    }
}