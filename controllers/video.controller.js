const videoModel = require('../models/video.model');

module.exports = {

    async save(req, res) {
        const video = req.body;
        const ids = await videoModel.save(video);
        video._id = ids[0];
        return res.status(201).json(video);
    },

    async updateById(req, res) {
        const id = req.params.video_id || 0;
        videoModel.updateById(id, req.body)
            .then(() => {
                return res.status(204).end();
            });
    },

    async deleteById(req, res) {
        const id = req.params.video_id || 0;
        videoModel.deleteById(id)
            .then(() => {
                return res.status(204).end();
            });
    },

    async getVideoOfProductAndUser(req, res) {
        const user_id = req.params.user_id || 0;
        const product_id = req.params.product_id || 0;
        var list = await videoModel.findAByUserIdAndProductId(user_id, product_id);
        return res.json(list);
    },
}