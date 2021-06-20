const express = require('express');
const userModel = require('../models/user.model');
const userController = require('../controllers/user.controller');
const watchlistController = require('../controllers/watchlist.controller');
// const schema = require('../schemas/watchlist.json');

const router = express.Router();

router.route('/')
  .post((req, res) => {
    userController.save(req, res);
  });

router.route('/:id')
  .get((req, res) => {
    userController.findById(req, res);
  })
  .put((req, res) => {
    //something
  })
  .delete((req, res) => {
    //something
  });

module.exports = router;