const express = require('express');
const productController = require('../controllers/product.controller');
const router = express.Router();

/* lấy danh sách product theo category_id
query:
    - category_id (default 0)
    - limit (default 12)
    - page (default 1)
 */
router.route('/')
    .get(async (req, res) => {
        productController.productOfCategory(req, res);
    });

/* lấy product theo id (ví dụ ...product/1)
param: id 
*/
router.route('/:id')
    .get(async (req, res) => {
        productController.detailProduct(req, res)
    });
module.exports = router;