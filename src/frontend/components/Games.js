var React = require('react');

var Games = React.createClass({
	componentDidMount: function() {
		document.title = "Games";
	},
	
	render: function() {
		return (
		<div className="gamesContainer">
			<a href="http://opengameart.org/users/1001com" target="_blank"><img src="http://localhost:8000/resources/assets/rightJimmy.png"/></a>
			<h1>Jimmy Jump coming soon!</h1>
			<a href="http://opengameart.org/users/1001com" target="_blank"><img src="http://localhost:8000/resources/assets/leftJimmy.png"/></a>
		</div>
		);
	}
});

module.exports = Games;