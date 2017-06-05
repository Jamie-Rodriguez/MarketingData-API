'use strict';


var mongoose = require('mongoose'),
	Survey = mongoose.model('Surveys');

exports.list_all_surveys = function(req, res) {
	Survey.find({}, function(err, survey) {
		if (err)
			res.send(err);
		res.json(survey);
	});
};



// CRUD functionality
exports.create_survey = function(req, res) {
	var newSurvey = new Survey(req.body);
	newSurvey.save(function(err, survey) {
		if (err)
			res.send(err);
		res.json(survey);
	});
};


exports.read_survey = function(req, res) {
	Survey.findById(req.params.id, function(err, survey) {
		if (err)
			res.send(err);
		res.json(survey);
	});
};


exports.update_survey = function(req, res) {
	Survey.findOneAndUpdate(req.params.id, req.body, {new: true}, function(err, survey) {
		if (err)
			res.send(err);
		res.json(survey);
	});
};


exports.delete_survey = function(req, res) {
	Survey.remove({
		_id: req.params.id
	}, function(err, survey) {
		if (err)
			res.send(err);
		res.json({ message: 'Survey successfully deleted' });
	});
};