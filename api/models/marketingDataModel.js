
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var SurveySchema = new Schema({
	name: {
		type: String,
		default: 'Name not entered'
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		enum: ['M', 'F', 'NA'],
		default: ['NA']
	},
	country: {
		type: String,
		enum: ['ES', 'AUS', 'USA']
	},
	income: {
		currency: {
			type: String,
			enum: ['EUR', 'USD', 'AUD'],
			required: true
		},
		salary: {
			type: Number,
			required: true
		}
	},
	Created_date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Surveys', SurveySchema);