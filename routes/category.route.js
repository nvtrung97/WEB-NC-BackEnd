const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();
const schema = require('../schemas/category.json');

router.route('/')
    .get(async (req, res) => {
        categoryController.findAll(req, res)
    });
router.route('/:id')
    .get(async (req, res) => {
        categoryController.findById(req, res)
    });
module.exports = router;