var React = require('react');

function ContactForm(props) {
	return (
			<form className="emailForm">
				<h1>Email me</h1>
				<textarea 
					id="emailName"
					className="smallTextArea"
					placeholder="Your name"
					value={props.name} 
					onChange={props.handleEmailNameChange}
					style={{float:'left'}}>
				</textarea>
				<textarea 
					id="emailSubject"
					className="smallTextArea"
					placeholder="Subject"
					value={props.subject} 
					onChange={props.handleEmailSubjectChange}
					style={{float:'left'}}>
				</textarea>
				<textarea 
					id="emailBody"
					className="largeTextArea"
					value={props.body} 
					onChange={props.handleEmailBodyChange}
					style={{float:'right'}}>
				</textarea>
				<button type="button" onClick={props.handleSubmit} style={{float: 'right'}} className="standardButton">
					Submit
				</button>
			</form>
	);
};

module.exports = ContactForm;