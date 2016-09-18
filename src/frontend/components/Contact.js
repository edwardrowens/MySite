var React = require('react');
var ContactForm = require('./ContactForm');
var asdjhhjh

var Contact = React.createClass({
	getInitialState: function() {
		return { subject: "", body: ""};
	},
	
	handleEmailBodyChange: function(e) {
		this.setState({body: e.target.value});
	},
	
	handleEmailSubjectChange: function(e) {
		this.setState({subject: e.target.value});
	},
	
	handleSubmit: function() {
		var request = new XMLHttpRequest();
		request.open('POST', 'localhost:8000/hello');
		
		request.onload = function(e) {
			alert('callback!');
			if (request.status === 200) {
				alert('successful post' + request.responseText);
			}
			else {
				alert('post not successful');
			}
		};
		// send the request and reset state
		alert('sending info');
		request.send(JSON.stringify(this.state));
		this.setState({subject:"", body:""});
	},
	
	render: function() {
		return (
			<ContactForm handleSubmit={this.handleSubmit} 
						 subject={this.state.subject} 
						 body={this.state.body}
						 handleEmailBodyChange={this.handleEmailBodyChange}
						 handleEmailSubjectChange={this.handleEmailSubjectChange}/>
		);
	}
});

module.exports = Contact;