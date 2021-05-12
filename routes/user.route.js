const express = require('express');
const bcrypt = require('bcryptjs');
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/', async function (req, res) {
  const user = req.body;
  user.password = bcrypt.hashSync(user.password, 10);

  const ids = await userModel.add(user);
  user.id = ids[0];
  delete user.password;

  res.status(201).json(user);
})

router.delete('/:id', function (req, res) {

})


module.exports = router;