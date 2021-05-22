const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();
// const schema = require('../schemas/category.json');

router.route('/highlight-of-week')
    .get(async (req, res) => {
        productController.highlightOfWeek(req, res);
    });
router.route('/most-of-view')
    .get(async (req, res) => {
        productController.mostOfView(req, res);
    });
router.route('/lastest')
    .get(async (req, res) => {
        productController.latestProduct(req, res);
    });

// router.route('/:id')
//     .get(async (req, res) => {
//         categoryController.findById(req, res)
//     });
module.exports = router;