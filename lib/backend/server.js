var path = require('path');
var nodeMailer = require('nodemailer');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(express.static(path.join(__dirname, '../../lib')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, '../../index.html'));
});

app.post('/hello', function (req, res) {
	console.log("submit");
	console.log(req.url);
	console.log(JSON.stringify(req.body));
	res.send("test");
	var transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: 'eddiereactpractice@gmail.com',
			pass: 'eddiebeme1'
		}
	});

	var mailOptions = {
		from: 'eddiereactpractice@gmail.com>',
		to: 'eddiebeme@gmail.com',
		subject: 'hi',
		text: 'this is my message'
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.json({ yo: 'error' });
		} else {
			console.log('message sent');
			res.json({ yo: info.response });
		}
	});
});

console.log("Server started");
var server = app.listen(8000);