const userModel = require('../models/user.model');

module.exports = {
    async findAll(req, res) {
        const list = await userModel.findAll();
        return res.json(list);
    },

    async save(req, res) {
        const user = req.body;
        const ids = await userModel.save(user);
        user._id = ids[0];
        return res.status(201).json(user);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const user = await userModel.findById(id);
        if (user === null) {
            return res.status(204).end();
        }
        return res.json(user);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        userModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        userModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },
}