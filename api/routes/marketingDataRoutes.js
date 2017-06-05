'use strict';
module.exports = function(app) {
	var surveyData = require('../controllers/marketingDataController');

	app.route('/surveyData')
	.get(surveyData.list_all_surveys)
	.post(surveyData.create_survey);

	app.route('/surveyData/:id')
	.get(surveyData.read_survey)
	.put(surveyData.update_survey)
	.delete(surveyData.delete_survey);

	// Invalid route entered
	app.use(function(req, res) {
		res.status(404).send({url: req.originalUrl + ' not found'})
	});
};