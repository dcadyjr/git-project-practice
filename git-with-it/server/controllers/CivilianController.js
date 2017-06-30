var express = require('express');
var router = express.Router();
var Civilian = require('../models/Civilian');

router.get('/', function(request, response){
	Civilian.find(function(err, civilians){
		console.log(civilians);
		response.render('home', {civiliansArray: civilians});
	});
});

router.post('/', function(request, response){
	var civilian = new Civilian({name: request.body.name,
								movie: request.body.movie,
								power: request.body.power,
								height: request.body.height});
	civilian.save();
	response.redirect('/civilians');
});

module.exports = router;


