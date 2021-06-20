const registeredlistModel = require('../models/registeredlist.model');

module.exports = {
    async findAll(req, res) {
        const list = await registeredlistModel.findAll();
        return res.json(list);
    },

    async save(req, res) {
        let registeredlist = req.body;
        registeredlist.user_id = req.user.user_id;
        const ids = await registeredlistModel.save(registeredlist);
        registeredlist._id = ids[0];
        return res.status(201).json(registeredlist);
    },

    async findById(req, res) {
        const id = req.params.registeredlist_id || 0;
        const registeredlist = await registeredlistModel.findById(id);
        if (registeredlist === null) {
            return res.status(204).end();
        }
        return res.json(registeredlist);
    },

    async updateById(req, res) {
        const id = req.params.registeredlist_id || 0;
        registeredlistModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.registeredlist_id || 0;
        registeredlistModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async getRegisteredlistOfUser(req, res) {
        const user_id = req.user.user_id || 0;
        var list = await registeredlistModel.findAllByUserId(user_id);
        return res.json(list);
    },
}