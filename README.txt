== Outline ==
Included here is a simple REST API and database for a marketing research system. The REST API performs basic CRUD functionality on the database items, outlined below.
Note that this was developed on a Linux system and so some commands and requirements may be different for certain OS.

== Quick Start ==
1. Open terminal and run
	$ npm run start
2. Open a second terminal and run
	$ mongod
3. Use a HTTP requester to interact with the database (see "Using the API" for valid calls)

== Setup and Requirements ==
Requires Node.js, Express and MongoDB

Required Node.js packages:
	express
	nodemon
	bodyParser

Start up the Nodejs server with
	$ npm run start
Start up MongoDB server with
	$ mongod
		or if that is not working:
	$ systemctl start mongod

If the connection was successfully set up then you should receive the message "Survey data RESTful API server started on: 3000" in the terminal window.

Make sure to change mongoose.connect() to your local URL for the database, if the hostname has not been changed then by default it should be mongodb://localhost/MarketingDatadb

== Using the API ==
Once the server is running, the easiest way to interact with the API is through a HTTP requester such as the Postman extension on the Google Chrome browser.
Next set your URL on the HTTP requester to the local server you've created (http://localhost:3000/surveyData unless the host name has been changed from the default setting) and make sure the content body is set to "x-www-form-urlencoded".
From here, API calls can be performed.

The following HTTP requests are available:
	GET http://localhost:3000/surveyData
		Gets all the items in the database.
	POST http://localhost:3000/surveyData
		Creates the item with the specified data and saves it in the database.
		See MarketingDataAPI/api/models/marketingDataModel.js for information on which keys are required for successful input to the database.

The HTTP requests below perform actions on specific database items:
	GET http://localhost:3000/surveyData/<item ID>
		Retrieves the data for the specified item in the database.
	PUT http://localhost:3000/surveyData/<item ID>
		Updates the data for the specified item in the database.
	DELETE http://localhost:3000/surveyData/<item ID>
		Deletes the specified item from the database.
