var React = require('react');
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
			this.setState({content: request.responseText});
		} else {
			this.setState({content: "The content could not be loaded."});
			console.log('Request unsuccessful: ' + request.status + ' from ' + request.responseURL);
		}
	},
	
	componentDidMount: function() {
		document.title = "Home";
	},
	
	render: function() {
		return <div dangerouslySetInnerHTML={{__html:marked(this.state.content)}}></div>;
	}
});

module.exports = Home;