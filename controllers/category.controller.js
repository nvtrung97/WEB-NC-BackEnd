const categoryModel = require('../models/category.model');

module.exports = {
    async findAll(req, res) {
        const list = await categoryModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const category = req.body;
        const ids = await categoryModel.save(category);
        category._id = ids[0];
        res.status(201).json(category);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const category = await categoryModel.findById(id);
        if (category === null) {
            return res.status(204).end();
        }
        res.json(category);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        categoryModel.updateById(id, req.body)
            .then(() => {
                res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        categoryModel.deleteById(id)
            .then(() => {
                res.status(204).end();
            });
    },

    async mostRegisted(req, res) {
        const limit = req.query.limit || 3;
        var list = await categoryModel.getMostRegisted(limit);
        res.json(list);
    }
}