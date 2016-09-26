var React = require('React');
var marked = require('marked');

function Home(props) {
	return React.createElement(
		'h1',
		null,
		'Welcome home!' + marked('__mark this shit__')
	);
};

module.exports = Home;