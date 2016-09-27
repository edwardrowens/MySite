var React = require('React');
var marked = require('marked');

var Home = React.createClass({
	getInitialState: function() {
		return {content:""};
	},
	
	componentWillMount: function() {
		var request = new XMLHttpRequest();
		request.open('GET', 'resources/documents/home.txt', false);
		request.send();

		if (request.status === 200) {
			this.setState({content: request.responseText.replace(/\n/g, "<br />")});
		} else {
			this.setState({content: "The content could not be loaded."});
			console.log('Request unsuccessful: ' + request.status + ' from ' + request.responseURL);
		}
	},
	
	render: function() {
		return <div dangerouslySetInnerHTML={{__html:marked(this.state.content)}}></div>;
	}
});

module.exports = Home;