var React = require('react');
var SkillsContainer = require('./../container/SkillsContainer')
var WorkExperienceContainer = require('./../container/WorkExperienceContainer')
var EducationContainer = require('./../container/EducationContainer')
var AboutMeContainer = require('./../container/AboutMeContainer')

function Resume(props) {
	return (
		<div id="resumeContainer">
			<div id="resume">
				<AboutMeContainer />
				<WorkExperienceContainer />
				<EducationContainer />
				<SkillsContainer />
			</div>
		</div>
	);
}
module.exports = Resume;