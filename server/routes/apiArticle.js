'use strict'
const express = require('express');
let router = express.Router();
const apiArticle = require('../controllers/apiArticleController');

/* GET home page. */
router.get('/', apiArticle.getAll);
router.post('/', apiArticle.post);
router.get('/:slug', apiArticle.getOne);
router.put('/:id', apiArticle.update);
router.delete('/:id', apiArticle.destroy);

module.exports = router;
