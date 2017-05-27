var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var path = require('path');
var bodyParser = require('body-parser');
var Promise = require('bluebird');
var mongoose = require('mongoose');
mongoose.Promise = Promise;
var configDB = require('./config/database.js');
var routes = require('./app/routes');

// Configuration ===========================================================
mongoose.connect(configDB.url); // connect to the database

// Set up express application ==============================================
// use bodyParser to parse json elements
app.use(bodyParser.json());
// Use urlencoded to give and recieve body elements through the url
app.use(bodyParser.urlencoded({
	extended: true
}));

// set up ejs for templating
app.set('view engine', 'ejs');

// setup static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes ==================================================================
routes(app);

// Launch ==================================================================
app.listen(port);
