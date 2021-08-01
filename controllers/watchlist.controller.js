const watchlistModel = require('../models/watchlist.model');

module.exports = {
    async save(req, res) {
        let watchlist = req.body;
        watchlist.user_id = req.user.user_id;
        const ids = await watchlistModel.save(watchlist);
        watchlist._id = ids[0];
        return res.status(201).json(watchlist);
    },

    async deleteById(req, res) {
        const id = req.params.watchlist_id || 0;
        watchlistModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async getWatchlistOfUser(req, res) {
        const user_id = req.user.user_id || 0;
        var list = await watchlistModel.findAllByUserId(user_id);
        return res.json(list);
    },

    async deleteByProductIdAndUserId(req, res) {
        const productId = req.query.product_id || 0;
        const userId = req.user.user_id;
        var deleted = await watchlistModel.deleteByProductIdAndUserId(productId, userId);
        if (deleted != 0)
            return res.status(200).json({ message: 'Deleted' });
        else
            return res.status(200).json({ message: 'Delete fail' });
    },
}