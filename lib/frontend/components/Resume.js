var React = require('react');
var ResumePresentation = require('./ResumePresentation');

var Resume = React.createClass({
	getInitialState: function () {
		return { content: "" };
	},

	componentWillMount: function () {
		var request = new XMLHttpRequest();
		request.open('GET', 'resources/documents/webResume.txt', false);
		request.send();

		if (request.status === 200) {
			this.setState({ content: request.responseText });
		} else {
			this.setState({ content: "The content could not be loaded." });
			alert('Request unsuccessful: ' + request.status + ' from ' + request.responseURL);
		}
	},

	render: function () {
		return React.createElement(ResumePresentation, { content: this.state.content });
	}
});

module.exports = Resume;