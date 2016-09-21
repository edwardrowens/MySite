var React = require('react');

var ContactForm = React.createClass({
	render: function () {
		return React.createElement(
			"div",
			{ className: "emailElements" },
			React.createElement(
				"form",
				{ className: "emailInput", onSubmit: this.props.handleSubmit },
				React.createElement("textarea", {
					className: "subject",
					value: this.props.subject,
					onChange: this.props.handleEmailSubjectChange }),
				React.createElement("textarea", {
					className: "email",
					value: this.props.body,
					onChange: this.props.handleEmailBodyChange }),
				React.createElement(
					"button",
					{ type: "submit", style: { float: 'right' }, className: "submitEmailButton" },
					"Submit"
				)
			)
		);
	}
});

module.exports = ContactForm;