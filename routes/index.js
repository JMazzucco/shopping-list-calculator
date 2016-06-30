var express = require('express');
var router = express.Router();
var app = express();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index.html');
});

router.get('/list', function(req, res, next) {
  res.json(totalKilograms);
});

module.exports = router;
