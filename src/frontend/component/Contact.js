var React = require('react');
var ContactForm = require('./ContactForm');

var Contact = {
	getInitialState: function () {
		return { subject: "", body: "", name: "" };
	},

	handleEmailBodyChange: function (e) {
		this.setState({ body: e.target.value });
	},

	handleEmailSubjectChange: function (e) {
		this.setState({ subject: e.target.value });
	},

	handleEmailNameChange: function (e) {
		this.setState({ name: e.target.value });
	},

	handleSubmit: function () {
		if (this.state.name && this.state.body) {
			var request = new XMLHttpRequest();
			request.open('POST', '/contact');
			request.setRequestHeader('Content-Type', 'application/json');
			request.onload = function () {
				if (request.status === 200) {
					console.log('email sent successfully');
					alert('Email sent!')
				}
				else {
					alert('Email is currently down. Please try again later.')
					console.log('post not successful code:' + request.status);
				}
			};
			// send the request and reset state
			request.send(JSON.stringify(this.state));
			this.setState({ subject: "", name: "", body: "" });
		} else {
			alert('Please provide a name and body of the email');
		}
	},

	componentDidMount: function () {
		document.title = "Contact";
	},

	render: function () {
		return (
			<ContactForm handleSubmit={this.handleSubmit}
				subject={this.state.subject}
				body={this.state.body}
				name={this.state.name}
				handleEmailBodyChange={this.handleEmailBodyChange}
				handleEmailSubjectChange={this.handleEmailSubjectChange}
				handleEmailNameChange={this.handleEmailNameChange} />
		);
	}
}

module.exports = Contact;