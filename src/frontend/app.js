var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Home = require('./components/Home');
var Resume = require('./components/Resume');
var Portfolio = require('./components/Portfolio');
var Header = require('./components/Header');
var Contact = require('./components/Contact');
var Footer = require('./components/Footer');

var Application = React.createClass({
	render: function() {
		return (
			<div>
				<Header/>
				<div id="content">
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
});

ReactDOM.render(
<Router.Router history={Router.browserHistory}>
	<Router.Route path="/" component = {Application}>
		<Router.IndexRoute path="home" component = {Home} />
		<Router.Route path="home" component = {Home}/>
		<Router.Route path="resume" component = {Resume} />
		<Router.Route path="portfolio" component = {Portfolio} />
		<Router.Route path="contact" component = {Contact} />
	</ Router.Route>
</ Router.Router>, 
document.getElementById("app"));