var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Home = require('./Home');

function Header(props) {
	return React.createElement(
		'div',
		{ id: 'header' },
		React.createElement('img', { className: 'logo', src: 'http://localhost:8000/resources/assets/logo.jpg' }),
		React.createElement(
			'ul',
			{ className: 'headerLinks' },
			React.createElement(
				Router.IndexLink,
				{ to: '/home', style: { textDecoration: 'none', color: 'black' } },
				React.createElement(
					'li',
					{ id: 'leftHead' },
					'Home'
				)
			),
			React.createElement('div', { className: 'headerDivider' }),
			React.createElement(
				Router.Link,
				{ to: '/resume', style: { textDecoration: 'none', color: 'black' } },
				React.createElement(
					'li',
					null,
					'Resume'
				)
			),
			React.createElement('div', { className: 'headerDivider' }),
			React.createElement(
				Router.Link,
				{ to: '/games', style: { textDecoration: 'none', color: 'black' } },
				React.createElement(
					'li',
					null,
					'Games'
				)
			),
			React.createElement('div', { className: 'headerDivider' }),
			React.createElement(
				Router.Link,
				{ to: '/contact', style: { textDecoration: 'none', color: 'black' } },
				React.createElement(
					'li',
					{ id: 'rightHead' },
					'Contact'
				)
			),
			React.createElement('div', { className: 'headerDivider' })
		)
	);
};

module.exports = Header;