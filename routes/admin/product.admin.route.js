const express = require('express');
const productController = require('../../controllers/product.controller');
const router = express.Router();

router.route('/')
    .get((req, res) => {
        productController.findAll(req, res)
    })

    .post((req, res) => {
        productController.save(req, res)
    });

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