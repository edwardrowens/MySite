var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router')

var Resume = require('./component/Resume')
var PageLinksContainer = require('./container/PageLinksContainer')
var WorkExperienceContainer = require('./container/WorkExperienceContainer')
var ContactContainer = require('./container/ContactContainer')
var SkillsContainer = require('./container/SkillsContainer')
var EducationContainer = require('./container/EducationContainer')

var Application = React.createClass({
	componentDidMount: function () {
		document.title = "Eddie Owens";
	},
	render: function (props) {
		return (
			<div>
				<div id="content">
					<Resume/>
				</div>
				<PageLinksContainer />
			</div>
		)
	}
});

ReactDOM.render(<Application/>, document.getElementById("app"))