var React = require('react');
var SkillsContainer = require('./../container/SkillsContainer')
var WorkExperienceContainer = require('./../container/WorkExperienceContainer')
var EducationContainer = require('./../container/EducationContainer')

var Resume = React.createClass({
	componentDidMount: function () {
		document.title = "Home";
	},

	render: function () {
		return (
			<div id="resumeContainer">
				<div id="resume">
					<div id="experienceBlocks">
						<WorkExperienceContainer />
						<EducationContainer />
					</div>
					<SkillsContainer />
				</div>
				<form method="get" action="/downloads/resume">
					<button id="downloadButton" className="standardButton" type="submit">
						Download
					</button>
				</form>
			</div>
		);
	}
});

module.exports = Resume;