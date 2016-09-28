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

app.get('/', function(req, res) {
	res.redirect('/home');
});

app.get('/downloads/resume', function(req, res) {
	var parentDocumentDir = path.join('__dirname', '..', 'resources', 'documents');
	
	// Check to see if there is a PDF version of the markdown file
	path.exists(path.join('__dirname', '..', 'resources', 'documents', 'webResume.pdf'), function(exists) {
		if (exists) {
			// Check to see if the files have different modified dates
			fs.stat(path.join(parentDocumentDir, 'webResume.txt'), function(err, stats) {
				var txtMTime = new Date(util.inspect(stats.mtime));
				fs.stat(path.join(parentDocumentDir, 'webResume.pdf'), function(err, stats) {
					var pdfMTime = new Date(util.inspect(stats.mtime));
					if (pdfMTime < txtMTime) {
						markdownpdf()
							.from(path.join(parentDocumentDir, 'webResume.txt'))
							.to(path.join(parentDocumentDir, 'webResume.pdf'), function() {
								res.download(path.join(parentDocumentDir, 'webResume.pdf'));
							});
					}
				});
			});
		} else {
			markdownpdf().from(path.join(parentDocumentDir, 'webResume.txt')).to(path.join(parentDocumentDir, 'webResume.pdf'), function() {
				res.download(path.join(parentDocumentDir, 'webResume.pdf'));
			});
		}
	});
}); 

app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname,'..', '..', 'index.html'));
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
		from: req.body.name + ' <eddiereactpractice@gmail.com>',
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