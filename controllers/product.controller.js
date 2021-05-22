const productModel = require('../models/product.model');

module.exports = {
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

    async latestProduct(req, res) {
        const limit = req.query.limit || 10;
        var list = await productModel.getLastestProduct(limit);
        res.json(list);
    }
}