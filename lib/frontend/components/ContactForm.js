var React = require('react');

var ContactForm = React.createClass({
	render: function () {
		return React.createElement(
			"form",
			{ className: "emailForm", onSubmit: this.props.handleSubmit },
			React.createElement("textarea", {
				className: "subject",
				value: this.props.subject,
				onChange: this.props.handleEmailSubjectChange,
				style: { float: 'left' } }),
			React.createElement("textarea", {
				className: "body",
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