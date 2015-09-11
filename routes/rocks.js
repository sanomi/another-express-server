var express = require('express');
var router = express.Router();
var fs = require('fs');

var rocks;
router.get('/', function(req, res, next) {
	fs.readFile('routes/rocks.json', function(err, data) {
		rocks = JSON.parse(data);
		console.log(JSON.stringify(rocks.types))
  res.render('rocks', {title: 'Rocks', rocks: rocks.types });
	  })
});

module.exports = router;