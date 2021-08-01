const categoryModel = require('../models/category.model');
const productModel = require('../models/product.model');

module.exports = {
    async findAll(req, res) {
        const list = await categoryModel.findAll();
        return res.json(list);
    },

    async save(req, res) {
        const category = req.body;
        const ids = await categoryModel.save(category);
        category._id = ids[0];
        return res.status(201).json(category);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const category = await categoryModel.findById(id);
        if (category === null) {
            return res.status(204).end();
        }
        return res.json(category);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        categoryModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        let isHasProduct = await productModel.findByCategoryId(id);
        if (isHasProduct) return res.status(403).json({ code: 403, message: "Category has courses." });
        categoryModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async mostRegisted(req, res) {
        const limit = req.query.limit || 3;
        var list = await categoryModel.getMostRegisted(limit);
        return res.json(list);
    }
}