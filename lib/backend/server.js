var path = require('path');
var express = require("express");
var app = express();
var favicon = require('serve-favicon');

// grab the configuration
var PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(favicon(path.join(__dirname, 'build', 'assets', 'favicon.png')));

app.get('/', function (req, res, next) {
	res.sendFile(path.join(__dirname, '..', '..', 'lib', 'build', 'index.html'))
})

console.log("Server started: " + PORT);
var server = app.listen(PORT);