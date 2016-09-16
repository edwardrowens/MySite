var React = require('react');

var ContactForm = React.createClass({
	render: function() {
		return (
			<div className = "emailElements">
				<form className="emailInput" onSubmit={this.props.handleSubmit}>
					<textarea 
						className="subject" 
						value={this.props.subject} 
						onChange={this.props.handleEmailSubjectChange}>
					</textarea>
					<textarea 
						className="email" 
						value={this.props.body} 
						onChange={this.props.handleEmailBodyChange}>
					</textarea>
					<button style={{float: 'right'}} className="submitEmailButton">
						Submit
					</button>
				</form>
			</div>
		);
	}
});

module.exports = ContactForm;