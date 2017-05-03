var React = require('react');
var SkillsContainer = require('./../container/SkillsContainer')
var WorkExperienceContainer = require('./../container/WorkExperienceContainer')
var EducationContainer = require('./../container/EducationContainer')
var AboutMeContainer = require('./../container/AboutMeContainer')
var ContactContainer = require('../container/ContactContainer')
var VisibilitySensor = require('react-visibility-sensor')

function ContentContainer(props) {
	return (
		<div id="contentContainer">
			<div id="aboutme">
				<AboutMeContainer />
				<VisibilitySensor onChange={props.onAboutMeContainerVisible} style={{border: 'solid'}}/>
			</div>
			<div id="workexperience">
				<WorkExperienceContainer />
				<VisibilitySensor onChange={props.onWorkExperienceContainerVisible} style={{border: 'solid'}}/>
			</div>
			<div id="education">
				<EducationContainer />
				<VisibilitySensor onChange={props.onEducationContainerVisible} style={{border: 'solid'}}/>
			</div>
			<div id="skills">
				<SkillsContainer />
				<VisibilitySensor onChange={props.onSkillsContainerVisible} style={{border: 'solid'}}/>
			</div>
			<div id="contact">
				<ContactContainer />
				<VisibilitySensor onChange={props.onContactContainerVisible} style={{border: 'solid'}}/>
			</div>
		</div>
	);
}
module.exports = ContentContainer;