var path = require('path');
var nodeMailer = require('nodeMailer');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, '../../lib')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname,'../../index.html'));
});

app.post('/contact', function(req, res) {
	var transporter = nodeMailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'eddiereactpractice@gmail.com',
			pass: 'eddiebeme1'
		}
	});
	
	var mailOptions = {
		from: 'eddie <eddiereactpractice@gmail.com>',
		to: 'eddiebeme@gmail.com',
		subject: req.body.subject,
		text: req.body.body
	};
	
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.json({status: 'success'});
		} else {
			console.log('message sent');
			res.json({status: 'failed ' + info.response});
		}
	});
});

console.log("Server started");
var server = app.listen(8000);