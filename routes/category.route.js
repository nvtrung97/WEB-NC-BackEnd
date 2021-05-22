const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();
const schema = require('../schemas/category.json');

router.route('/')
    .get(async (req, res) => {
        console.log("all");
        categoryController.findAll(req, res)
    });
router.route('/most-registed')
    .get(async (req, res) => {
        categoryController.mostRegisted(req, res);
    });
router.route('/m2')
    .get(async (req, res) => {
        console.log("m2");
        // categoryController.findAll(req, res)
    });
router.route('/:id')
    .get(async (req, res) => {
        console.log("id");
        categoryController.findById(req, res)
    });
module.exports = router;