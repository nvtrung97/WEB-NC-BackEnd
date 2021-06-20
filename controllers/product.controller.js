const productModel = require('../models/product.model');
const userModel = require('../models/user.model');


module.exports = {

    async findAll(req, res) {
        const list = await productModel.findAll();
        return res.json(list);
    },

    async save(req, res) {
        const product = req.body;
        const ids = await productModel.save(product);
        product._id = ids[0];
        return res.status(201).json(product);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const product = await productModel.findById(id);
        if (product === null) {
            return res.status(204).end();
        }
        return res.json(product);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        productModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        productModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async productOfCategory(req, res) {
        const category_id = req.query.category_id || 0;
        const limit = req.query.limit || 12;
        const page = req.query.page || 1;
        var list = await productModel.getProductOfCategory(category_id, limit, page);
        return res.json(list);
    },

    async highlightOfWeek(req, res) {
        const limit = req.query.limit || 4;
        var list = await productModel.getHighlightOfWeek(limit);
        return res.json(list);
    },

    async mostOfView(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getMostOfView(limit);
        return res.json(list);
    },

    async mostOfCategory(req, res) {
        const limit = req.query.limit || 5;
        const category_id = req.query.category_id || 0;
        var list = await productModel.getMostOfCategory(category_id, limit);
        return res.json(list);
    },

    async latestProduct(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getLastestProduct(limit);
        return res.json(list);
    },

    async searchProduct(req, res) {
        const keyword = req.query.keyword || '';
        const type = req.query.type || 'name';
        const limit = req.query.limit || 10;
        const page = req.query.page || 1;
        const order = req.query.order || 'desc';
        var list = await productModel.searchProduct(keyword, type, limit, page, order);
        return res.json(list);
    },

    async detailProduct(req, res) {
        const id = req.params.id || 0;
        var product = await productModel.findById(id);
        // res.json({ ...product, author: user });
        return res.json(product);
    }
}