const cityModel = require('../models/city.model');

module.exports = {
    async findAll(req, res) {
        const list = await cityModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const city = req.body;
        const ids = await cityModel.save(city);
        city.city_id = ids[0];
        res.status(201).json(city);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const city = await cityModel.findById(id);
        if (city === null) {
            return res.status(204).end();
        }
        res.json(city);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        cityModel.updateById(id, req.body)
        .then(()=>{
            res.status(204).end();
        });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        cityModel.deleteById(id)
        .then(()=>{
            res.status(204).end();
        });
    }
}