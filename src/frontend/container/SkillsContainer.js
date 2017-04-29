var React = require('react');
var Skill = require('./../component/Skill')
var Title = require('./../component/Title')

function SkillsContainer(props) {
    return (
        <div className="resumeBlock">
            <Title text="Skills" />
            <div className="subTitleContainer">
                <h2 className="subTitle">Languages and Frameworks</h2>
            </div>
            <ul className="skillBlock">
                <Skill rating={4} skillTitle="Java" />
                <Skill rating={3} skillTitle="Android" />
                <Skill rating={3} skillTitle="Retrofit" />
                <Skill rating={3} skillTitle="Socket.io" />
                <Skill rating={2} skillTitle="React" />
                <Skill rating={2} skillTitle="Node" />
                <Skill rating={2} skillTitle="Spring Boot"/>
                <Skill rating={1} skillTitle="SQL" />
            </ul>
            <ul className="skillBlock">
                <Skill rating={3} skillTitle="C++" />
                <Skill rating={3} skillTitle="Google Maps Places Directions APIs" />
                <Skill rating={3} skillTitle="Guice" />
                <Skill rating={2} skillTitle="Picasso" />
                <Skill rating={2} skillTitle="Javascript" />
                <Skill rating={2} skillTitle="Dagger"/>
                <Skill rating={2} skillTitle="HTML/CSS" />
            </ul>
            <div className="subTitleContainer">
                <h2 className="subTitle">Dev Utilities</h2>
            </div>
            <ul className="skillBlock">
                <Skill rating={4} skillTitle="Maven" />
                <Skill rating={2} skillTitle="Git" />
                <Skill rating={1} skillTitle="Gradle" />
            </ul>
        </div>
    )
}

module.exports = SkillsContainer;