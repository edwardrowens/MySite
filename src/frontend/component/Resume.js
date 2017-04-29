var React = require('react');
var SkillsContainer = require('./../container/SkillsContainer')
var WorkExperienceContainer = require('./../container/WorkExperienceContainer')
var EducationContainer = require('./../container/EducationContainer')
var AboutMeContainer = require('./../container/AboutMeContainer')
var ContactContainer = require('../container/ContactContainer')

function Resume(props) {
	return (
		<div id="resumeContainer">
			<div id="resume">
				<AboutMeContainer />
				<WorkExperienceContainer />
				<EducationContainer />
				<SkillsContainer />
				<ContactContainer />
			</div>
		</div>
	);
}
module.exports = Resume;