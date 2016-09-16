var http = require('http');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');

app.use(express.static(path.join(__dirname, '../../lib')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname,'../../index.html'));
});

var router = express.Router();
app.use('/sayHello', router);
router.post('localhost:8000/hello', function(req, res) {
	console.log("submit");
	res.send("test");
	/*var transporter = nodemailer.createTransport({
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
		text:'this is my message'
	};
	
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			console.log(error);
			res.json({yo: 'error'});
		} else {
			console.log('message sent');
			res.json({yo: info.response});
		}
	});*/
});

console.log("Server started");
var server = app.listen(8000);