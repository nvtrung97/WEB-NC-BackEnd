const userModel = require('../models/user.model');

module.exports = {
    async findAll(req, res) {
        const list = await userModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const user = req.body;
        user.password = bcrypt.hashSync(user.password, 10);
        const newUser = await userModel.save(user);
        delete newUser.password;
        res.status(201).json(newUser);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const user = await userModel.findById(id);
        if (user === null) {
            return res.status(204).end();
        }
        res.json(user);
    },
}