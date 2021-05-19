const express = require('express');
const homeController = require('../controllers/home.controller');
const router = express.Router();
// const schema = require('../schemas/category.json');

router.route('/product-of-week')
    .get(async (req, res) => {
        homeController.productOfWeek(req, res);
    });
router.route('/product-of-view')
    .get(async (req, res) => {
        homeController.productOfView(req, res);
    });
// router.route('/:id')
//     .get(async (req, res) => {
//         categoryController.findById(req, res)
//     });
module.exports = router;