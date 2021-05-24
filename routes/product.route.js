const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        productController.productOfCategory(req, res);
    });
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
router.route('/search')
    .get(async (req, res) => {
        productController.searchProduct(req, res);
    });

// router.route('/:id')
//     .get(async (req, res) => {
//         categoryController.findById(req, res)
//     });
module.exports = router;