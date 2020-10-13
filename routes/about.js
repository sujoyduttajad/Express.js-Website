var express = require('express');
var router = express.Router();

/* GET home page. */
// the forward slash represents the home page
//we don't have '/about' instead of '/' because we are using its own routes files. This only applies if you are specifying inside an index.js file  
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About' });// render will basically display the jade file
});

module.exports = router;
