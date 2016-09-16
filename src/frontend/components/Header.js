var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Home = require('./Home');

var Header = React.createClass({
	render : function() {
	return (
		<div>
			<ul className="header">
				<Router.IndexLink to="/home" style={{textDecoration: 'none', color:'black'}} activeStyle = {{paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff'}}><li id="leftHead">Home</li></Router.IndexLink>
				<Router.Link to="/resume" style={{textDecoration: 'none', color:'black'}} activeStyle = {{paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff'}}><li>Resume</li></Router.Link>
				<Router.Link to="/portfolio" style={{textDecoration: 'none', color:'black'}} activeStyle = {{paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff'}}><li>Portfolio</li></Router.Link>
				<Router.Link to="/contact" style={{textDecoration: 'none', color:'black'}} activeStyle = {{paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff'}}><li id="rightHead">Contact</li></Router.Link>
			</ul>
		</div>
	);
	}
});

module.exports = Header;