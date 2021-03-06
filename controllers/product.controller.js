const productModel = require('../models/product.model');
const userModel = require('../models/user.model');
const videoModel = require('../models/video.model');
const registeredlistModel = require('../models/registeredlist.model');
const reviewModel = require('../models/review.model');
const watchlistModel = require('../models/watchlist.model');
var jwt = require('jsonwebtoken');

module.exports = {

    async findAll(req, res) {
        const list = await productModel.findAll();
        return res.json(list);
    },
    async findAllTeacher(req, res) {
        const id = req.user.user_id || 0;
        const list = await productModel.findAllByTeacher(id);
        console.log(list.length);
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
        const limit = req.query.limit || 6;
        const page = req.query.page || 1;
        var totalProduct = await productModel.countProductOfCategory(category_id);
        var list = await productModel.getProductOfCategory(category_id, limit, page);
        var result = {
            totalProduct,
            totalPage: (totalProduct % limit) > 0 ? ((totalProduct - totalProduct % limit) / limit + 1) : (totalProduct - totalProduct % limit) / limit,
            page: page,
            pageSize: limit,
            records: list
        };
        return res.json(result);
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
        const category_id = req.query.category_id || 1;
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
        const limit = req.query.limit || 6;
        const page = req.query.page || 1;
        const order = req.query.order || 'desc';
        const category_id = req.query.category_id || 0;
        var list = await productModel.searchProduct(keyword, category_id, limit, page, order);
        var totalProduct = await productModel.countSearchProduct(keyword, category_id);

        var result = {
            totalProduct,
            totalPage: (totalProduct % limit) > 0 ? ((totalProduct - totalProduct % limit) / limit + 1) : (totalProduct - totalProduct % limit) / limit,
            page,
            pageSize: limit,
            records: list
        };
        return res.json(result);
    },

    async detailFacebookProduct(req, res) {
        const id = req.params.id || 0;
        var product = await productModel.getDetailFacebookProduct(id);
        return res.json(product);
    },

    async detailProduct(req, res) {
        const id = req.params.id || 0;
        let registered = false;
        let videoPause = null;
        let reviewed = false;
        let liked = false;
        let token = req.header('authorization');
        if (token) token = token.split(' ')[1]
        else token = req.params.token;
        if (token) {
            try {
                const { auth } = jwt.verify(token, process.env.SECRECT_KEY);
                let user = await userModel.findById(auth.user_id)
                if (user.deleted == 0) {
                    var list = await registeredlistModel.findByProductIdAndUserId(id, auth.user_id);
                    if (list.length != 0) {
                        registered = true;
                        videoPause = list[0].video_pause_id;
                    }
                    var reivews = await reviewModel.getByProductIdAndUserId(id, auth.user_id);
                    if (reivews.length != 0) {
                        reviewed = true;
                    }
                    var likes = await watchlistModel.getByProductIdAndUserId(id, auth.user_id);
                    if (likes.length != 0) {
                        liked = true;
                    }
                }
            } catch (err) {
                console.log(err);
            }
        }
        var product = await productModel.findDetailById(id);
        var videos = await videoModel.findPreviewByProductId(id);
        return res.json({ ...product, liked, videoPause, registered, reviewed, videos });
    },

    async findAllOfUser(req, res) {
        const user_id = req.user.user_id || 0;
        const list = await productModel.findAllByUserId(user_id);
        return res.json(list);
    },

    async saveOfUser(req, res) {
        const user_id = req.user.user_id || 0;
        const product = req.body;
        product.user_id = user_id;
        const ids = await productModel.save(product);
        product._id = ids[0];
        return res.status(201).json(product);
    },

    async updateByIdAndUserId(req, res) {
        const id = req.params.id || 0;
        const user_id = req.user.user_id || 0;
        productModel.updateByIdAndUserId(id, user_id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteByIdAndUserId(req, res) {
        const id = req.params.id || 0;
        const user_id = req.user.user_id || 0;
        productModel.deleteByIdAndUserId(id, user_id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async finalByIdAndUserId(req, res) {
        const id = req.params.id || 0;
        const user_id = req.user.user_id || 0;
        productModel.updateStatusFinal(id, user_id)
            .then(() => {
                return res.status(204).end();
            });
    },
}