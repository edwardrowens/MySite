var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Home = require('./components/Home');
var Resume = require('./components/Resume');
var Portfolio = require('./components/Portfolio');
var Header = require('./components/Header');
var Contact = require('./components/Contact');

var Application = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div className="content">
					{this.props.children}
				</div>
			</div>
		);
	}
});

ReactDOM.render(
<Router.Router>
	<Router.Route path="/" component = {Application}>
		<Router.Route path="home" component = {Home} />
		<Router.Route path="resume" component = {Resume} />
		<Router.Route path="portfolio" component = {Portfolio} />
		<Router.Route path="contact" component = {Contact} />
	</ Router.Route>
</ Router.Router>, 
document.getElementById("app"));