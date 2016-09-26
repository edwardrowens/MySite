var React = require('react');

var ContactForm = React.createClass({
	render: function () {
		return React.createElement(
			"form",
			{ className: "emailForm", onSubmit: this.props.handleSubmit },
			React.createElement(
				"h1",
				null,
				"Email me"
			),
			React.createElement("textarea", {
				id: "emailName",
				className: "smallTextArea",
				placeholder: "Your name",
				value: this.props.name,
				onChange: this.props.handleEmailNameChange,
				style: { float: 'left' } }),
			React.createElement("textarea", {
				id: "emailSubject",
				className: "smallTextArea",
				placeholder: "Subject",
				value: this.props.subject,
				onChange: this.props.handleEmailSubjectChange,
				style: { float: 'left' } }),
			React.createElement("textarea", {
				id: "emailBody",
				className: "largeTextArea",
				value: this.props.body,
				onChange: this.props.handleEmailBodyChange,
				style: { float: 'right' } }),
			React.createElement(
				"button",
				{ type: "submit", style: { float: 'right' }, className: "submitEmailButton" },
				"Submit"
			)
		);
	}
});

module.exports = ContactForm;