var React = require('react');
var SkillsContainer = require('./../container/SkillsContainer')
var WorkExperienceContainer = require('./../container/WorkExperienceContainer')
var EducationContainer = require('./../container/EducationContainer')
var AboutMeContainer = require('./../container/AboutMeContainer')
var ContactContainer = require('../container/ContactContainer')

function ContentContainer(props) {
	return (
		<div id="contentContainer">
			<div id="aboutme">
				<AboutMeContainer />
			</div>
			<div id="workexperience">
				<WorkExperienceContainer />
			</div>
			<div id="education">
				<EducationContainer />
			</div>
			<div id="skills">
				<SkillsContainer />
			</div>
			<div id="contact">
				<ContactContainer />
			</div>
		</div>
	);
}
module.exports = ContentContainer;