var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Resume = require('./component/Resume');

var Application = React.createClass({
	componentDidMount: function () {
		document.title = "Eddie Owens";
	},
	render: function (props) {
		return (
			<div>
				<div id="content">
					<Resume />
				</div>
			</div>
		)
	}
});

ReactDOM.render(<Application />, document.getElementById("app"))