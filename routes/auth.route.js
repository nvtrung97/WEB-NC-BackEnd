const express = require('express');
const bcrypt = require('bcryptjs');
const randomstring = require('randomstring');
const jwt = require('../utils/jwt.util');
// const userModel = require('../models/user.model');

const router = express.Router();

router.post('/signup', async (req, res) => {
  console.log(req.body.username + '   ' + req.body.password);
  if (req.body.username && req.body.password) {
    var result = bcrypt.hashSync(req.body.password, 5);
    res.json(
      {
        username: req.body.username,
        password: result
      }
    )
  }
});
router.post('/signin', async (req, res) => {
  if (req.body.username && req.body.password) {
    const auth = { email: req.body.username, role: req.body.password };
    var token = await jwt.generateToken(auth, '60h');
    console.log(token);
    var check = jwt.verifyToken('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1hbmd2aWVudHJpZXUiLCJyb2xlIjoiMTIzMTIzMTIzIiwiaWF0IjoxNjIxMTA2OTAyLCJleHAiOjE2MjEzMjI5MDJ9.JRzKkAJEIrGgNHhYxnfysENnfq7NuzP6PC7qiizJ9dY')
      .then((result) => {
        res.json(
          {
            token: result
          }
        )
      }).catch((err) => {
        res.json(
          {
            token: err
          })
      });
    // })
    // var result = bcrypt.compareSync(req.body.password, '$2a$05$6DcsxGzQCwA61EKRjyUIreCQscY4drF14H4fDydGUH37h1QOTbTre');
    // res.json(
    //   {
    //     token: 'nono'
    //   }
    // )
  }
});
// const user = await userModel.singleByUserName(req.body.username);
// if (user === null) {
//   return res.json({
//     authenticated: false
//   });
// }

// if (!bcrypt.compareSync(req.body.password, user.password)) {
//   return res.json({
//     authenticated: false
//   });
// }

// const payload = {
//   userId: user.id
// }
// const opts = {
//   expiresIn: 10 * 60 // seconds
// }
// const accessToken = jwt.sign(payload, 'SECRET_KEY', opts);

// const refreshToken = randomstring.generate(80);
// await userModel.patchRFToken(user.id, refreshToken);

// return res.json({
//   authenticated: true,
//   accessToken,
//   refreshToken
// })
// })
module.exports = router;