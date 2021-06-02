const express = require('express');
const productController = require('../../controllers/product.controller');
const router = express.Router();
// const schema = require('../../schemas/product.json');

router.route('/')
    .get(async (req, res) => {
        productController.findAll(req, res)
    })

// .post(require('../../middlewares/validate.mdw')(schema), async (req, res) => {
//     productController.save(req, res)
// });

router.route('/:id')
    .get(async (req, res) => {
        productController.findById(req, res)
    })

    .put(async (req, res) => {
        productController.updateById(req, res)
    })

    .delete(async (req, res) => {
        productController.deleteById(req, res)
    });

module.exports = router;