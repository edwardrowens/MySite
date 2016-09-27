var React = require('react');

function ContactForm(props) {
	return React.createElement(
		"form",
		{ className: "emailForm", onSubmit: props.handleSubmit },
		React.createElement(
			"h1",
			null,
			"Email me"
		),
		React.createElement("textarea", {
			id: "emailName",
			className: "smallTextArea",
			placeholder: "Your name",
			value: props.name,
			onChange: props.handleEmailNameChange,
			style: { float: 'left' } }),
		React.createElement("textarea", {
			id: "emailSubject",
			className: "smallTextArea",
			placeholder: "Subject",
			value: props.subject,
			onChange: props.handleEmailSubjectChange,
			style: { float: 'left' } }),
		React.createElement("textarea", {
			id: "emailBody",
			className: "largeTextArea",
			value: props.body,
			onChange: props.handleEmailBodyChange,
			style: { float: 'right' } }),
		React.createElement(
			"button",
			{ type: "submit", style: { float: 'right' }, className: "standardButton" },
			"Submit"
		)
	);
};

module.exports = ContactForm;