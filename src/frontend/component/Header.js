var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Home = require('./Home');

function Header(props) {
	return (
		<div id="header">
			<img className="logo" src='resources/assets/logo.jpg' title='Created by Will Kevans' />
			<ul className="headerLinks">
				<Router.IndexLink to="/home" style={{ textDecoration: 'none', color: 'black' }}>
					<li>Home</li>
				</Router.IndexLink>
				<div className="headerDivider"></div>
				<Router.Link to="/contact" style={{ textDecoration: 'none', color: 'black' }}>
					<li>Contact</li>
				</Router.Link>
				<div className="headerDivider"></div>
			</ul>
			<div id="socialMedia">
				<a href="https://www.linkedin.com/in/edward-owens-9a36aaaa" target="_blank"><img src='resources/assets/LinkedInLogo.png' /></a>
				<a href="https://github.com/edwardrowens" target="_blank"><img src='resources/assets/GitHubLogo.png' /></a>
			</div>
		</div>
	);
};

module.exports = Header;