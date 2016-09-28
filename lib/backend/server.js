var path = require('path');
var fs = require('fs');
var nodeMailer = require('nodeMailer');
var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var favicon = require('serve-favicon');
var MarkdownPDF = require('markdown-pdf');

app.use(express.static(path.join(__dirname, '..')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, '..', 'resources', 'assets', 'favicon.png')));

app.get('/', function (req, res) {
	res.redirect('/home');
});

app.get('/downloads/resume', function (req, res) {
	var parentDocumentDir = path.join(__dirname, '..', '..', 'lib', 'resources', 'documents');

	// Check to see if there is a PDF version of the markdown file
	fs.exists(path.join(parentDocumentDir, 'webResume.pdf'), function (exists) {
		if (exists) {
			console.log('file exists');
			// Check to see if the files have different modified dates
			fs.stat(path.join(parentDocumentDir, 'webResume.txt'), function (err, stats) {
				console.log('txt statted');
				var txtMTime = new Date(stats.mtime);
				fs.stat(path.join(parentDocumentDir, 'webResume.pdf'), function (err, stats) {
					console.log('pdf statted');
					var pdfMTime = new Date(stats.mtime);
					if (pdfMTime < txtMTime) {
						MarkdownPDF().from(path.join(parentDocumentDir, 'webResume.txt')).to(path.join(parentDocumentDir, 'webResume.pdf'), function () {
							res.download(path.join(parentDocumentDir, 'webResume.pdf'));
						});
					} else {
						console.log('pdf is up to date');
						console.log('attempting to dl ' + path.join(parentDocumentDir, 'webResume.pdf'));
						res.download(path.join(parentDocumentDir, 'webResume.pdf'));
					}
				});
			});
		} else {
			MarkdownPDF().from(path.join(parentDocumentDir, 'webResume.txt')).to(path.join(parentDocumentDir, 'webResume.pdf'), function () {
				res.download(path.join(parentDocumentDir, 'webResume.pdf'));
			});
		}
	});
});

app.get('*', function (req, res) {
	res.sendFile(path.resolve(__dirname, '..', '..', 'index.html'));
});

app.post('/contact', function (req, res) {
	var transporter = nodeMailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'eddiereactpractice@gmail.com',
			pass: 'eddiebeme1'
		}
	});

	var mailOptions = {
		from: req.body.name + ' <eddiereactpractice@gmail.com>',
		to: 'eddiebeme@gmail.com',
		subject: req.body.subject,
		text: req.body.body
	};

	transporter.sendMail(mailOptions, function (error, info) {
		if (error) {
			console.log(error);
			res.json({ status: 'success' });
		} else {
			console.log('message sent');
			res.json({ status: 'failed ' + info.response });
		}
	});
});

console.log("Server started");
var server = app.listen(8000);