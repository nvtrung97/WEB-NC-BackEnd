const userModel = require('../models/user.model');

module.exports = {
    // async findAll(req, res) {
    //     const list = await userModel.findAll();
    //     res.json(list);
    // },

    async save(req, res) {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 10);
        const ids = await userModel.add(user);
        user.id = ids[0];
        delete user.password;
        res.status(201).json(user);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const user = await userModel.findByUserId(id);
        if (user === null) {
            return res.status(204).end();
        }
        res.json(user);
    },

    // async updateById(req, res) {
    //     const id = req.params.id || 0;
    //     userModel.updateById(id, req.body)
    //         .then(() => {
    //             res.status(204).end();
    //         });
    // },

    // async deleteById(req, res) {
    //     const id = req.params.id || 0;
    //     userModel.deleteById(id)
    //         .then(() => {
    //             res.status(204).end();
    //         });
    // },

    // async mostRegisted(req, res) {
    //     const limit = req.query.limit || 3;
    //     var list = await userModel.getMostRegisted(limit);
    //     res.json(list);
    // }
}