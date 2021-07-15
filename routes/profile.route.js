const express = require('express');
const userModel = require('../models/user.model');
const profileController = require('../controllers/profile.controller');
const watchlistController = require('../controllers/watchlist.controller');
const registeredlistController = require('../controllers/registeredlist.controller');

// const schema = require('../schemas/watchlist.json');

const router = express.Router();

router.route('/')
  .get((req, res) => {
    profileController.getProfile(req, res);
  })
  //cập nhật profile
  .put((req, res) => {
    profileController.updateProfile(req, res);
  })

/* thông tin watchlist theo user_id
param:
      - user_id
*/
router.route('/watch-lists')
  //xem khóa học yêu thích
  .get((req, res) => {
    watchlistController.getWatchlistOfUser(req, res);
  })
  //thêm khóa học yêu thích
  .post((req, res) => {
    watchlistController.save(req, res);
  })
  .delete((req, res) => {
    watchlistController.deleteByProductIdAndUserId(req, res);
  });;

/* thông tin watchlist theo user_id và watchlist_id
param:
    - user_id
    - watchlist_id
*/


/* thông tin registeredlist theo user_id
param:
      - user_id
      - watchlist_id
*/
router.route('/registered-lists')
  //xem khóa học đã đăng kí
  .get((req, res) => {
    registeredlistController.getRegisteredlistOfUser(req, res);
  })
  //thêm khóa học vào danh sách đăng kí
  .post((req, res) => {
    registeredlistController.save(req, res);
  });

module.exports = router;