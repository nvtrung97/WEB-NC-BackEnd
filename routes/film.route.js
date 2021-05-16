const express = require('express');
const filmController = require('../controllers/film.controller');
const router = express.Router();
const schema = require('../schemas/film.json');

router.route('/')
  .get(async (req, res) => { 
    filmController.findAll(req, res) 
  })

  .post(require('../middlewares/validate.mdw')(schema), async (req, res) => { 
    filmController.save(req, res)
  });

router.route('/:id')
  .get(async (req, res) => { 
    filmController.findById(req, res)
  })

  .put(require('../middlewares/validate.mdw')(schema), async (req, res) => { 
    filmController.updateById(req, res)
  })

  .delete(async (req, res) => { 
    filmController.deleteById(req, res)
  });

module.exports = router;