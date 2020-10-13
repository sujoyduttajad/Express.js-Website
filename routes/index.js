var express = require('express');
var router = express.Router();

/* GET home page. */
// the forward slash represents the home page
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });// render will basically display the jade file
});

module.exports = router;
