var React = require('react');

var Portfolio = React.createClass({
	componentDidMount: function() {
		document.title = "Portfolio";
	},
	
	render: function() {
		return <h1>This is my portfolio</h1>;
	}
});

module.exports = Portfolio;