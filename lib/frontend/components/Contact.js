var React = require('react');
var ContactForm = require('./ContactForm');

var Contact = React.createClass({
	getInitialState: function () {
		return { subject: "", body: "" };
	},

	handleEmailBodyChange: function (e) {
		this.setState({ body: e.target.value });
	},

	handleEmailSubjectChange: function (e) {
		this.setState({ subject: e.target.value });
	},

	handleSubmit: function () {
		this.setState({ subject: "", body: "" });
	},

	render: function () {
		return React.createElement(ContactForm, { onSubmit: this.handleSubmit,
			subject: this.state.subject,
			body: this.state.body,
			handleEmailBodyChange: this.handleEmailBodyChange,
			handleEmailSubjectChange: this.handleEmailSubjectChange });
	}
});

module.exports = Contact;