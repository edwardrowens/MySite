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
				<VisibilitySensor onChange={props.onAboutMeContainerVisible} partialVisibility={true}>
					<AboutMeContainer />
				</VisibilitySensor>
			</div>
			<div id="workexperience">
				<VisibilitySensor onChange={props.onWorkExperienceContainerVisible} partialVisibility={true}>
					<WorkExperienceContainer />
				</VisibilitySensor>
			</div>
			<div id="education">
				<VisibilitySensor onChange={props.onEducationContainerVisible} partialVisibility={true}>
					<EducationContainer />
				</VisibilitySensor>
			</div>
			<div id="skills">
				<VisibilitySensor onChange={props.onSkillsContainerVisible} partialVisibility={true}>
					<SkillsContainer />
				</VisibilitySensor>
			</div>
			<div id="contact">
				<VisibilitySensor onChange={props.onContactContainerVisible} partialVisibility={true}>
					<ContactContainer />
				</VisibilitySensor>
			</div>
		</div>
	);
}
module.exports = ContentContainer;