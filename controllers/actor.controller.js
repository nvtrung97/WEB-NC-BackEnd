const actorModel = require('../models/actor.model');

module.exports = {
    async findAll(req, res) {
        const list = await actorModel.findAll();
        res.json(list);
    },

    async save(req, res) {
        const actor = req.body;
        const ids = await actorModel.save(actor);
        actor.actor_id = ids[0];
        res.status(201).json(actor);
    },

    async findById(req, res) {
        const id = req.params.id || 0;
        const actor = await actorModel.findById(id);
        if (actor === null) {
            return res.status(204).end();
        }
        res.json(actor);
    },

    async updateById(req, res) {
        const id = req.params.id || 0;
        actorModel.updateById(id, req.body)
        .then(()=>{
            res.status(204).end();
        });
    },

    async deleteById(req, res) {
        const id = req.params.id || 0;
        actorModel.deleteById(id)
        .then(()=>{
            res.status(204).end();
        });
    }
}