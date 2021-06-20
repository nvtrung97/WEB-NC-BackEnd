const express = require('express');
const productController = require('../controllers/product.controller');
const videoController = require('../controllers/video.controller');
const router = express.Router();

/* lấy danh sách product theo category_id
query:
    - category_id (default 0)
    - limit (default 12)
    - page (default 1)
 */
router.route('/')
    .get((req, res) => {
        productController.productOfCategory(req, res);
    });

/* lấy danh sách product nổi bật trong tuần qua
query:
    - limit (default 4)
 */
router.route('/highlight-of-week')
    .get((req, res) => {
        productController.highlightOfWeek(req, res);
    });

/* lấy danh sách product lượt view cao nhất
query:
    - limit (default 10)
 */
router.route('/most-of-view')
    .get((req, res) => {
        productController.mostOfView(req, res);
    });

/* lấy danh sách product mới nhất
query:
    - limit (default 10)
*/
router.route('/lastest')
    .get((req, res) => {
        productController.latestProduct(req, res);
    });

/* lấy danh sách 5 product lượt view cao nhất của category
Cho yêu cầu 1.5
query:
    - category_id (default 0)
    - limit (default 5)
*/
router.route('/most-of-category')
    .get((req, res) => {
        productController.mostOfCategory(req, res);
    });

/* lấy danh sách product theo search
query:
    - keyword (default '')
    - type (default name, 2 option: name và category)
    - limit (default 10)
    - page (default 1)
    - order (default 'desc', 2 option desc và asc)
 */
router.route('/search')
    .get((req, res) => {
        productController.searchProduct(req, res);
    });

/* lấy product theo id (ví dụ ...product/1)
param: id 
*/
router.route('/:id')
    .get((req, res) => {
        productController.detailProduct(req, res);
    });
/* lấy video theo product theo id (ví dụ ...product/1/videos)
param: id
*/
router.get('/:id/videos', require('../middlewares/auth.mdw').verifyToken, (req, res) => {
    videoController.getVideoOfProductAndUser(req, res);
});
router.get('/:id/pause', require('../middlewares/auth.mdw').verifyToken, (req, res) => {
    videoController.pauseProductAndUser(req, res);
});
module.exports = router;