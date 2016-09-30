var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Home = require('./Home');

function Header(props) {
	return (
		<div id="header">
			<img className = "logo" src='http://localhost:8000/resources/assets/logo.jpg'/>
			<ul className="headerLinks">
				<Router.IndexLink to="/home" style={{textDecoration: 'none', color:'black'}}>
					<li id="leftHead">Home</li>
				</Router.IndexLink>
				<div className="headerDivider"></div>
				<Router.Link to="/resume" style={{textDecoration: 'none', color:'black'}}>
					<li>Resume</li>
				</Router.Link>
				<div className="headerDivider"></div>
				<Router.Link to="/games" style={{textDecoration: 'none', color:'black'}}>
					<li>Games</li>
				</Router.Link>
				<div className="headerDivider"></div>
				<Router.Link to="/contact" style={{textDecoration: 'none', color:'black'}}>
					<li id="rightHead">Contact</li>
				</Router.Link>
				<div className="headerDivider"></div>
			</ul>
		</div>
	);
};

module.exports = Header;