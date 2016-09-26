var React = require('React');
var marked = require('marked');

function Home(props) {
	return <h1>{'Welcome home!' + marked('__mark this shit__')}</h1>;
};

module.exports = Home;