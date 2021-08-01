const express = require('express');
const categoryController = require('../../controllers/category.controller');
const router = express.Router();
const schema = require('../../schemas/category.json');

router.route('/')
    .get((req, res) => {
        categoryController.findAll(req, res)
    })
    .post(require('../../middlewares/validate.mdw')(schema), (req, res) => {
        categoryController.save(req, res)
    });

router.route('/:id')
    .get((req, res) => {
        categoryController.findById(req, res)
    })

    .put((req, res) => {
        categoryController.updateById(req, res)
    })

    .delete((req, res) => {
        categoryController.deleteById(req, res)
    });

module.exports = router;