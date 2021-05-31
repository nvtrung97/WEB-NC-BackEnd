const express = require('express');
const reviewController = require('../controllers/review.controller');
const router = express.Router();

/* lấy danh sách review theo product_id
query:
    - product_id (default 0)
    - limit (default 5)
    - page (default 1)
*/
router.route('/')
    .get(async (req, res) => {
        reviewController.getReviewOfProduct(req, res);
    });
module.exports = router;