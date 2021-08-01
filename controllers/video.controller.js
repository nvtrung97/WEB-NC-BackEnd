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
        console.log(id);
        await videoModel.deleteById(id)

        return res.status(204).end();

    },

    async getVideoOfProductAndUser(req, res) {
        const user_id = req.user.user_id || 0;
        const product_id = req.params.id || 0;
        var list = await videoModel.findByUserIdAndProductId(user_id, product_id);
        if (list.length == 0)
            return res.status(400).json({
                message: 'Please register this product.'
            })
        return res.json(list);
    },

    async pauseProductAndUser(req, res) {
        const user_id = req.user.user_id || 0;
        const product_id = req.params.id || 0;
        const video_id = req.body.video_id;
        var list = await videoModel.updateByProductAndUser(user_id, product_id, video_id);
        return res.json(list);
    },

    async saveByUserId(req, res) {
        const video = req.body;
        // video.user_id = req.user.user_id || 0;
        // console.log(video);
        video.product_id = req.params.id || 0;
        const ids = await videoModel.save(video);
        video._id = ids[0];
        return res.status(201).json(video);
    },

}