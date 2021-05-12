const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const randomstring = require('randomstring');
// sửa lại theo cấu trúc MVC đi thầy code hơi tuuuuuu
const userModel = require('../models/user.model');

const router = express.Router();

router.post('/', async function (req, res) {
  const user = await userModel.singleByUserName(req.body.username);
  if (user === null) {
    return res.json({
      authenticated: false
    });
  }

  if (!bcrypt.compareSync(req.body.password, user.password)) {
    return res.json({
      authenticated: false
    });
  }

  const payload = {
    userId: user.id
  }
  const opts = {
    expiresIn: 10 * 60 // seconds
  }
  const accessToken = jwt.sign(payload, 'SECRET_KEY', opts);

  const refreshToken = randomstring.generate(80);
  await userModel.patchRFToken(user.id, refreshToken);

  return res.json({
    authenticated: true,
    accessToken,
    refreshToken
  })
})

router.post('/refresh', async function (req, res) {
  const { accessToken, refreshToken } = req.body;
  const { userId } = jwt.verify(accessToken, 'SECRET_KEY', {
    ignoreExpiration: true
  });

  const ret = await userModel.isValidRFToken(userId, refreshToken);
  if (ret === true) {
    const newAccessToken = jwt.sign({ userId }, 'SECRET_KEY', { expiresIn: 60 * 10 });
    return res.json({
      accessToken: newAccessToken
    });
  }

  return res.status(400).json({
    message: 'Refresh token is revoked!'
  });
})

module.exports = router;