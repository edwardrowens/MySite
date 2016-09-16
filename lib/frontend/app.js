var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Home = require('./components/Home');
var Resume = require('./components/Resume');
var Portfolio = require('./components/Portfolio');
var Header = require('./components/Header');
var Contact = require('./components/Contact');

var Application = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			null,
			React.createElement(Header, null),
			React.createElement(
				'div',
				{ className: 'content' },
				this.props.children
			)
		);
	}
});

ReactDOM.render(React.createElement(
	Router.Router,
	null,
	React.createElement(
		Router.Route,
		{ path: '/', component: Application },
		React.createElement(Router.Route, { path: 'home', component: Home }),
		React.createElement(Router.Route, { path: 'resume', component: Resume }),
		React.createElement(Router.Route, { path: 'portfolio', component: Portfolio }),
		React.createElement(Router.Route, { path: 'contact', component: Contact })
	)
), document.getElementById("app"));