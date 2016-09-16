var React = require('react');

var ContactForm = React.createClass({
	render: function () {
		return React.createElement(
			"div",
			{ className: "emailElements" },
			React.createElement(
				"form",
				{ className: "emailInput", method: "post", action: "localhost:8000/hello" },
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
					{
						style: { float: 'right' },
						className: "submitEmailButton",
						onClick: this.props.onSubmit },
					"Submit"
				)
			)
		);
	}
});

module.exports = ContactForm;