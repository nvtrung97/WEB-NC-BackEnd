const express = require('express');
const categoryController = require('../../controllers/category.controller');
const router = express.Router();
const schema = require('../../schemas/category.json');

router.route('/')
    .get(async (req, res) => {
        categoryController.findAll(req, res)
    })

    .post(require('../../middlewares/validate.mdw')(schema), async (req, res) => {
        categoryController.save(req, res)
    });

router.route('/:id')
    .get(async (req, res) => {
        categoryController.findById(req, res)
    })

    .put(async (req, res) => {
        categoryController.updateById(req, res)
    })

    .delete(async (req, res) => {
        categoryController.deleteById(req, res)
    });

module.exports = router;