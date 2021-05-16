const countryModel = require('../models/country.model');

module.exports = {
    async findAll(req, res) {
        const list = await countryModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const country = req.body;
        const ids = await countryModel.save(country);
        country.country_id = ids[0];
        res.status(201).json(country);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const country = await countryModel.findById(id);
        if (country === null) {
            return res.status(204).end();
        }
        res.json(country);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        countryModel.updateById(id, req.body)
        .then(()=>{
            res.status(204).end();
        });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        countryModel.deleteById(id)
        .then(()=>{
            res.status(204).end();
        });
    }
}