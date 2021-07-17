const userModel = require('../models/user.model');
const watchlistModel = require('../models/watchlist.model');
const registeredlistModel = require('../models/registeredlist.model');
const bcrypt = require('bcryptjs');
module.exports = {

    async getProfile(req, res) {
        const id = req.user.user_id || 0;
        const user = await userModel.findById(id);
        var list = await registeredlistModel.findAllByUserId(id);
        if (user === null) {
            return res.status(204).end();
        }
        return res.json({ ...user, numberRegistered: list.length });
    },

    async updateProfile(req, res) {
        const id = req.user.user_id || 0;
        if (req.body.password) {
            req.body.password = bcrypt.hashSync(req.body.password, Number(process.env.KEY_PASSWORD));
        }
        userModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async changePassword(req, res) {
        const id = req.user.user_id || 0;
        let user = await userModel.findById(id);
        let compare = bcrypt.compareSync(req.body.oldPassword, user.password);
        if (compare && user) {
            req.body.password = bcrypt.hashSync(req.body.password, Number(process.env.KEY_PASSWORD));
        }
        userModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

}