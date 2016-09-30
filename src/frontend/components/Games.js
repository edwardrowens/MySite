var React = require('react');

var Games = React.createClass({
	componentDidMount: function() {
		document.title = "Games";
	},
	
	render: function() {
		return (
		<div className="gamesContainer">
			<img src="http://localhost:8000/resources/assets/rightJimmy.png"/>
			<h1>Jimmy Jump coming soon!</h1>
			<img src="http://localhost:8000/resources/assets/leftJimmy.png"/>
		</div>
		);
	}
});

module.exports = Games;