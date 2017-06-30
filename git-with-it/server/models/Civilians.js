var mongoose = require('mongoose');

var CivilianSchema = new mongoose.Schema({
	name: String,
	movie: String,
	profession: String,
	height: Number,
	relationshipToHero: String
});

var civilianModel = mongoose.model('Civilian', CivilianSchema);

module.exports = civilanModel;