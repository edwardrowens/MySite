var React = require('react');

var ContactForm = React.createClass({
	render: function() {
		return (
				<form className="emailForm" onSubmit={this.props.handleSubmit}>
					<textarea 
						className="subject" 
						value={this.props.subject} 
						onChange={this.props.handleEmailSubjectChange}
						style={{float:'left'}}>
					</textarea>
					<textarea 
						className="body" 
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