var React = require('React');

function Component(props) {
	return React.createElement(
		'h1',
		null,
		'im THE component!'
	);
};

module.exports = Component;