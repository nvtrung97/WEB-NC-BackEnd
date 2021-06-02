const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();
const schema = require('../../schemas/user.json');

router.route('/')
    .get(async (req, res) => {
        userController.findAll(req, res)
    })

    .post(require('../../middlewares/validate.mdw')(schema), async (req, res) => {
        userController.save(req, res)
    });

router.route('/:id')
    .get(async (req, res) => {
        userController.findById(req, res)
    })

    .put(async (req, res) => {
        userController.updateById(req, res)
    })

    .delete(async (req, res) => {
        userController.deleteById(req, res)
    });

module.exports = router;