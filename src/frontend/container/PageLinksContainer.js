var React = require('react')

var PageLinkComponent = require('../component/PageLinkComponent')

function PageLinksContainer(props) {
    return (
        <div id="pageLinks">
            <ul>
                <PageLinkComponent isVisible={props.aboutMeContainerVisible} link="contentContainer" text="About Me" />
                <PageLinkComponent isVisible={props.workExperienceContainerVisible} link="workexperience" text="Experience" />
                <PageLinkComponent isVisible={props.educationContainerVisible} link="education" text="Education" />
                <PageLinkComponent isVisible={props.skillsContainerVisible} link="skills" text="Skills" />
                <PageLinkComponent isVisible={props.contactContainerVisible} link="contact" text="Contact" />
            </ul>
        </div>
    )
}

module.exports = PageLinksContainer