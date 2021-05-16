var express = require('express');
var router = express.Router();
let authController = require('../controllers/auth.controller');
const schemaRefresh = require('../schemas/refreshToken.json');
const schemaLogin = require('../schemas/login.json');
router.post('/api/v1/login', require('../middlewares/validate.mdw')(schemaLogin), async (req, res, next) => {
  authController.login(req, res, next).catch((error) => next(error));
});
router.get('/signup', async (req, res, next) => {
  authController.signup(req, res, next).catch((error) => next(error));
});
router.post('/api/v1/refresh', require('../middlewares/validate.mdw')(schemaRefresh), async (req, res, next) => {
  authController.refresh(req, res, next).catch((error) => { next(error) });
});
module.exports = router;

