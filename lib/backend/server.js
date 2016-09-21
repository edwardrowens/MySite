var path = require('path');
var nodeMailer = require('nodeMailer');
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

	console.log('creating transporter');
	var transporter = nodeMailer.createTransport({
		service: 'hotmail',
		auth: {
			user: 'eddiereactpractice@hotmail.com',
			pass: 'eddiebeme1'
		}
	});

	console.log('creating mail options');
	var mailOptions = {
		from: 'eddie <eddiereactpractice@hotmail.com>',
		to: 'eddiebeme@gmail.com',
		subject: 'hi',
		text: 'this is my message'
	};

	console.log('sending mail');
	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.json({ yo: 'error' });
		} else {
			console.log('message sent');
			res.json({ yo: info.response });
		}
	});
	console.log('mail sent');
});

console.log("Server started");
var server = app.listen(8000);