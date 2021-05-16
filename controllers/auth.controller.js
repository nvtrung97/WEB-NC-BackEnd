const userModel = require('../models/film.model');

module.exports = {
    async findAll(req, res) {
        const list = await filmModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const film = req.body;
        const ids = await filmModel.save(film);
        film.film_id = ids[0];
        res.status(201).json(film);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const film = await filmModel.findById(id);
        if (film === null) {
            return res.status(204).end();
        }
        res.json(film);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        filmModel.updateById(id, req.body)
            .then(() => {
                res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        filmModel.deleteById(id)
            .then(() => {
                res.status(204).end();
            });
    }
}