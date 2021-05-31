const reviewModel = require('../models/review.model');

module.exports = {
    // async findAll(req, res) {
    //     const list = await reviewModel.findAll();
    //     res.json(list);
    // },

    // async save(req, res) {
    //     const review = req.body;
    //     const ids = await reviewModel.save(review);
    //     review._id = ids[0];
    //     res.status(201).json(review);
    // },

    // async findById(req, res) {
    //     const id = req.params.id || 0;
    //     const review = await reviewModel.findById(id);
    //     if (review === null) {
    //         return res.status(204).end();
    //     }
    //     res.json(review);
    // },

    // async updateById(req, res) {
    //     const id = req.params.id || 0;
    //     reviewModel.updateById(id, req.body)
    //         .then(() => {
    //             res.status(204).end();
    //         });
    // },

    // async deleteById(req, res) {
    //     const id = req.params.id || 0;
    //     reviewModel.deleteById(id)
    //         .then(() => {
    //             res.status(204).end();
    //         });
    // },

    async getReviewOfProduct(req, res) {
        const limit = req.query.limit || 5;
        const page = req.query.page || 1;
        const productId = req.query.product || 0;
        var list = await reviewModel.getReviewOfProduct(productId, limit, page);
        res.json(list);
    },
}