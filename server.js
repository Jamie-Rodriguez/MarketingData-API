var express = require('express'),
	app = express(),
	port = process.env.PORT || 3000,
	mongoose = require('mongoose'),
	Survey = require('./api/models/marketingDataModel'),
	bodyParser = require('body-parser');
	
mongoose.Promise = global.Promise;
// Change this to your local url! Will fail to connect otherwise!
mongoose.connect('mongodb://localhost/MarketingDatadb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/marketingDataRoutes');
routes(app);


app.listen(port);


console.log('Survey data RESTful API server started on: ' + port);
