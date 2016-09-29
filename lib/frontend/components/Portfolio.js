var React = require('react');

var Portfolio = React.createClass({
	componentDidMount: function () {
		document.title = "Portfolio";
	},

	render: function () {
		return React.createElement(
			"h1",
			null,
			"This is my portfolio"
		);
	}
});

module.exports = Portfolio;