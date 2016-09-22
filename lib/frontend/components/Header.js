var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Home = require('./Home');

var Header = React.createClass({
	render: function () {
		return React.createElement(
			'div',
			{ className: 'header' },
			React.createElement('img', { className: 'logo', src: 'http://localhost:8000/assets/logo.jpg' }),
			React.createElement(
				'ul',
				{ className: 'headerLinks' },
				React.createElement(
					Router.IndexLink,
					{ to: '/home', style: { textDecoration: 'none', color: 'black' }, activeStyle: { paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff' } },
					React.createElement(
						'li',
						{ id: 'leftHead' },
						'Home'
					)
				),
				React.createElement(
					Router.Link,
					{ to: '/resume', style: { textDecoration: 'none', color: 'black' }, activeStyle: { paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff' } },
					React.createElement(
						'li',
						null,
						'Resume'
					)
				),
				React.createElement(
					Router.Link,
					{ to: '/portfolio', style: { textDecoration: 'none', color: 'black' }, activeStyle: { paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff' } },
					React.createElement(
						'li',
						null,
						'Portfolio'
					)
				),
				React.createElement(
					Router.Link,
					{ to: '/contact', style: { textDecoration: 'none', color: 'black' }, activeStyle: { paddingTop: 20, paddingBottom: 21, backgroundColor: '#66ffff' } },
					React.createElement(
						'li',
						{ id: 'rightHead' },
						'Contact'
					)
				)
			)
		);
	}
});

module.exports = Header;