const express = require('express');
const userModel = require('../models/user.model');
const userController = require('../controllers/user.controller');
const watchlistController = require('../controllers/watchlist.controller');
const registeredlistController = require('../controllers/registeredlist.controller');

// const schema = require('../schemas/watchlist.json');

const router = express.Router();

router.route('/:id')
  .get((req, res) => {
    userController.findById(req, res);
  })
  //cập nhật profile
  .put((req, res) => {
    userController.updateById(req, res);
  })
  .delete((req, res) => {
    //something
  });

/* thông tin watchlist theo user_id (ví dụ ...users/1/watchlists)
param:
      - user_id
*/
router.route('/:user_id/watchlists')
  //xem khóa học yêu thích
  .get((req, res) => {
    watchlistController.getWatchlistOfUser(req, res);
  })
  //thêm khóa học yêu thích
  .post((req, res) => {
    watchlistController.save(req, res);
  });

/* thông tin watchlist theo user_id và watchlist_id (ví dụ ...users/1/watch-lists)
param:
    - user_id
    - watchlist_id
*/
router.route('/:user_id/watch-lists/:watchlist_id')
  //loại bỏ khóa học yêu thích
  .delete((req, res) => {
    watchlistController.deleteById(req, res);
  });

/* thông tin registeredlist theo user_id (ví dụ ...users/1/registered-lists)
param:
      - user_id
      - watchlist_id
*/
router.route('/:user_id/registered-lists')
  //xem khóa học đã đăng kí
  .get((req, res) => {
    registeredlistController.getRegisteredlistOfUser(req, res);
  })
  //thêm khóa học vào danh sách đăng kí
  .post((req, res) => {
    registeredlistController.save(req, res);
  });

module.exports = router;