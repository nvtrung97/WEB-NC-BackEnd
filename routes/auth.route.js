var express = require('express');
var router = express.Router();
let jwt = require('../middlewares/auth.mdw');
let authController = require('../controllers/auth.controller');
const schemaRefresh = require('../schemas/refreshToken.json');
const schemaSignin = require('../schemas/signin.json');
const schemaSignup = require('../schemas/signup.json');
const schemaOtp = require('../schemas/otp.json');

router.post('/signin', require('../middlewares/validate.mdw')(schemaSignin), async (req, res, next) => {
  authController.signin(req, res).catch((error) => next(error));
});
router.post('/signup', require('../middlewares/validate.mdw')(schemaSignup), async (req, res, next) => {
  authController.signup(req, res, next).catch((error) => next(error));
});
router.post('/refresh', require('../middlewares/validate.mdw')(schemaRefresh), jwt.verifyTokenExpiration, async (req, res, next) => {
  authController.refresh(req, res, next).catch((error) => { next(error) });
});
router.post('/otp', require('../middlewares/validate.mdw')(schemaOtp), jwt.verifyToken, async (req, res, next) => {
  authController.verifyOTP(req, res, next).catch((error) => { next(error) });
});
module.exports = router;