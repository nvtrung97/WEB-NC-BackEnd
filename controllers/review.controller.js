const reviewModel = require('../models/review.model');
const registeredModel = require('../models/registeredlist.model');
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
        const product_id = req.query.product_id || 0;
        var list = await reviewModel.getReviewOfProduct(product_id, limit, page);
        return res.json(list);
    },

    async postReviewOfProduct(req, res) {
        const product_id = req.query.product_id || 0;
        const user_id = req.user.user_id || 0;
        var registered = await registeredModel.findByProductIdAndUserId(product_id, user_id);
        if (registered) {
            let review = req.body;
            review.product_id = product_id;
            review.user_id = user_id;
            const ids = await reviewModel.save(review);
            review._id = ids[0];
            const product = await productModel.findById(req.body.product_id);
            let number_reviews = product.number_reviews + 1;
            let score = (product.score * product.number_reviews + review.score) / number_reviews;
            await productModel.updateById(req.body.product_id, { number_reviews, score });
            return res.status(201).json(review);
        }
        else return res.status(403).json({ message: 'You do not have permission' });
    },
}