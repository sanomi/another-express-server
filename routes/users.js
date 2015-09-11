'use strict';
var express = require('express');
var router = express.Router();
var fs = require('fs');
let pushData = [];
/* GET users listing. */
let count = 0;
router.get('/', (req,res,next) => {
	res.statusCode = 200;
	res.render('users');
})
router.post('/', function(req,res,next) {
	count++;
	fs.readFile('routes/users.json', function(err, data) {
		data = JSON.parse(data);
		let user = Object.keys(data);
		console.log(user);
		let username = Object.keys(req.body);
		console.log(username);
		pushData.push(username);
		let obj = { users: pushData.join(", ") };
		let names = obj.users.split(', ')
		console.log(names);
		fs.writeFile('routes/users.json', JSON.stringify(obj));
		res.end();
	})
})

module.exports = router;
