const express = require('express');
const categoryController = require('../controllers/category.controller');
const router = express.Router();
const schema = require('../schemas/category.json');

// lấy danh sách tất cả category
router.route('/')
    .get(async (req, res) => {
        categoryController.findAll(req, res)
    });
// lấy danh sách các category được đăng kí nhiều nhất
router.route('/most-registed')
    .get(async (req, res) => {
        categoryController.mostRegisted(req, res);
    });
// lấy thông tin category theo id (ví dụ ...categories/1)
// param: id
router.route('/:id')
    .get(async (req, res) => {
        categoryController.findById(req, res)
    });
module.exports = router;