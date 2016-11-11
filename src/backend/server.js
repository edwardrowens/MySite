var path = require('path');
var fs = require('fs');
var nodeMailer = require('nodemailer');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var favicon = require('serve-favicon');
var smtpTransport = require('nodemailer-smtp-transport');

//Heroku stuff
var PORT = process.env.PORT || 8000;

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
			XOAuth2: {
				user: 'eddiereactpractice@gmail.com',
				clientId: '182602479635-g61dmkbb1g9ihto7f0mfk5nkkf3qqdn8.apps.googleusercontent.com',
				clientSecret: 'sDu5tQRL-WAsJi0VfKP9m1DI',
				refreshToken: '1/D5DNCQ_Hjloo87a5GNM3SDvI3PjBmHbjXU4HTCR9B_Y'
			}
		}
	}));
	
	var mailOptions = {
		from: req.body.name + ' <eddiereactpractice@gmail.com>',
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
		smtpTransport.close();
	});
});

console.log("Server started");
var server = app.listen(process.env.PORT || 8000);