const express = require('express');
const productController = require('../../controllers/product.controller');
const videoController = require('../../controllers/video.controller');
const router = express.Router();
// const schema = require('../../schemas/product.json');

router.route('/')
    .get((req, res) => {
        productController.findAllTeacher(req, res)
    })

    .post((req, res) => {
        productController.saveOfUser(req, res)
    });

router.route(':id/final')
    .get((req, res) => {
        productController.finalByIdAndUserId(req, res)
    })

router.route('/:id')
    .get((req, res) => {
        productController.findById(req, res)
    })

    .put((req, res) => {
        productController.updateByIdAndUserId(req, res)
    })

    .delete((req, res) => {
        productController.deleteByIdAndUserId(req, res)
    });

router.post('/:id/videos', (req, res) => {
    videoController.saveByUserId(req, res);
});
router.delete('/:id/videos/:video_id', (req, res) => {
    videoController.deleteVideo(req, res);
});
module.exports = router;