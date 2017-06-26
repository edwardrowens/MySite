var path = require('path')
var express = require("express")
var app = express()

// grab the configuration
var PORT = process.env.PORT || 8000

app.use(express.static(path.join(__dirname, '..', '..', 'lib', 'build')))

console.log("Server started: " + PORT)
var server = app.listen(PORT)