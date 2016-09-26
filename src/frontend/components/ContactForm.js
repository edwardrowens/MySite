var React = require('react');

var ContactForm = React.createClass({
	render: function() {
		return (
				<form className="emailForm" onSubmit={this.props.handleSubmit}>
					<h1>Email me</h1>
					<textarea 
						id="emailName"
						className="smallTextArea"
						placeholder="Your name"
						value={this.props.name} 
						onChange={this.props.handleEmailNameChange}
						style={{float:'left'}}>
					</textarea>
					<textarea 
						id="emailSubject"
						className="smallTextArea"
						placeholder="Subject"
						value={this.props.subject} 
						onChange={this.props.handleEmailSubjectChange}
						style={{float:'left'}}>
					</textarea>
					<textarea 
						id="emailBody"
						className="largeTextArea"
						value={this.props.body} 
						onChange={this.props.handleEmailBodyChange}
						style={{float:'right'}}>
					</textarea>
					<button type="submit" style={{float: 'right'}} className="submitEmailButton">
						Submit
					</button>
				</form>
		);
	}
});

module.exports = ContactForm;