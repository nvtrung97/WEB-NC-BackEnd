const express = require('express');
const reviewController = require('../controllers/review.controller');
const router = express.Router();

router.route('/')
    .get(async (req, res) => {
        reviewController.reviewOfProduct(req, res);
    });
module.exports = router;