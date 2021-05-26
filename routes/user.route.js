const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.route('/')
  .post(async (req, res) => {
    userController.save(req, res);
  });
router.route('/:id')
  .get(async (req, res) => {
    userController.findById(req, res);
  })
  .put((req, res) => {
    //something
  })
  .delete((req, res) => {
    //something
  })


module.exports = router;