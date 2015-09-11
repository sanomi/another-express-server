'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs');

var pets = ['cat', 'dog', 'hyena'];
router.get('/', function(req, res, next) {
	fs.writeFile('routes/pets.json', JSON.stringify({a:5}));
  res.render('pets', { title: 'Pets' , pets: pets });
});

module.exports = router;