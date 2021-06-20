const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();
// const schema = require('../../schemas/user.json');

router.route('/')
    .get((req, res) => {
        userController.findAll(req, res)
    })

// .post(require('../../middlewares/validate.mdw')(schema), (req, res) => {
//     userController.save(req, res)
// });

router.route('/:id')
    .get((req, res) => {
        userController.findById(req, res)
    })

    .put((req, res) => {
        userController.updateById(req, res)
    })

    .delete((req, res) => {
        userController.deleteById(req, res)
    });

module.exports = router;