var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.end('There are currently no users');
});

module.exports = router;