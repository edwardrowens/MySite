var path = require('path');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var favicon = require('serve-favicon');

// grab the configuration
var PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '../../lib', 'resources', 'assets', 'favicon.png')));

app.get('/', function (req, res) {
	res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'));
});

console.log("Server started: " + PORT);
var server = app.listen(PORT);