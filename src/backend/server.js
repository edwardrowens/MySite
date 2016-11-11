var path = require('path');
var fs = require('fs');
var nodeMailer = require('nodemailer');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var favicon = require('serve-favicon');
var smtpTransport = require('nodemailer-smtp-transport');
var crypt = require('./crypt');

//Heroku stuff
var PORT = process.env.PORT || 8000;

var encryptedPassword = '1670bbc731f58b3e';

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '..', 'resources', 'assets', 'favicon.png')));

app.get('/', function(req, res) {
	res.redirect('/home');
});

app.get('/downloads/resume', function(req, res) {
	var parentDocumentDir = path.join(__dirname, '..', '..', 'lib', 'resources', 'documents');
	
	// Check to see if there is a PDF version of the markdown file
	fs.exists(path.join(parentDocumentDir, 'Edward Owens Resume.pdf'), function(exists) {
		if (exists) {
			res.download(path.join(parentDocumentDir, 'Edward Owens Resume.pdf'));
		} 
	});
}); 

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname,'..', '..', 'index.html'));
});

app.post('/contact', function(req, res) {
	var transporter = nodeMailer.createTransport(smtpTransport({
		service: 'Gmail',
		auth: {
			user:'eddiemailsender@gmail.com',
			pass: crypt.decrypt(encryptedPassword)
		}
	}));
	
	var mailOptions = {
		from: req.body.name + ' <eddiemailsender@gmail.com>',
		to: 'edwardrowens@gmail.com',
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
var server = app.listen(process.env.PORT || 8000);