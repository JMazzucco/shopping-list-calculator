const express = require('express');
const app = express();
const router = express.Router();
const products = require('../products');

router.get('/', function(req, res, next) {
  res.sendfile('./public/index.html');
});

router.get('/computers', function(req, res, next) {
  res.json(products.computers);
});

router.get('/keyboards', function(req, res, next) {
  res.json(products.keyboards);
});

module.exports = router;
