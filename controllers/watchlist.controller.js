const watchlistModel = require('../models/watchlist.model');

module.exports = {
    async findAll(req, res) {
        const list = await watchlistModel.findAll();
        return res.json(list);
    },

    async save(req, res) {
        const watchlist = req.body;
        const ids = await watchlistModel.save(watchlist);
        watchlist._id = ids[0];
        return res.status(201).json(watchlist);
    },

    async findById(req, res) {
        const id = req.params.watchlist_id || 0;
        const watchlist = await watchlistModel.findById(id);
        if (watchlist === null) {
            return res.status(204).end();
        }
        return res.json(watchlist);
    },

    async updateById(req, res) {
        const id = req.params.watchlist_id || 0;
        watchlistModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.watchlist_id || 0;
        watchlistModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async getWatchlistOfUser(req, res) {
        const user_id = req.params.user_id || 0;
        var list = await watchlistModel.findAllByUserId(user_id);
        return res.json(list);
    },
}