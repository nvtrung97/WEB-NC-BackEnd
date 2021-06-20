const express = require('express');
const productController = require('../../controllers/product.controller');
const router = express.Router();
// const schema = require('../../schemas/product.json');

router.route('/')
    .get((req, res) => {
        productController.findAll(req, res)
    })

// .post(require('../../middlewares/validate.mdw')(schema), (req, res) => {
//     productController.save(req, res)
// });

router.route('/:id')
    .get((req, res) => {
        productController.findById(req, res)
    })

    .put((req, res) => {
        productController.updateById(req, res)
    })

    .delete((req, res) => {
        productController.deleteById(req, res)
    });

module.exports = router;