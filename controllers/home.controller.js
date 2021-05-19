const productModel = require('../models/product.model');

module.exports = {
    async productOfWeek(req, res) {
        const limit = req.query.limit || 4;
        var list = await productModel.getProductOfWeek(limit);
        res.json(list);
    },

    async productOfView(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getProductOfView(limit);
        res.json(list);
    },

    // async latestProduct(req, res) {
    //     const id = req.params.id || 0;
    //     const category = await categoryModel.findById(id);
    //     if (category === null) {
    //         return res.status(204).end();
    //     }
    //     res.json(category);
    // },

    // async categoryOfWeek(req, res) {
    //     const id = req.params.id || 0;
    //     categoryModel.updateById(id, req.body)
    //         .then(() => {
    //             res.status(204).end();
    //         });
    // }
}