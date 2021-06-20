const userModel = require('../models/user.model');
const watchlistModel = require('../models/watchlist.model');
const registeredlistModel = require('../models/registeredlist.model');

module.exports = {

    async getProfile(req, res) {
        const id = req.user.user_id || 0;
        const user = await userModel.findById(id);
        if (user === null) {
            return res.status(204).end();
        }
        return res.json(user);
    },

    async updateProfile(req, res) {
        const id = req.user.user_id || 0;
        userModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

}