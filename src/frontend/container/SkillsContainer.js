var React = require('react');
var Skill = require('./../component/Skill')
var Title = require('./../component/Title')

function SkillsContainer(props) {
    return (
        <div className="resumeBlock">
            <Title text="Skills" />
            <div id="skillBlock">
                <h2 ></h2>
                <Skill rating={4} skillTitle="Java"/>
                <Skill rating={3} skillTitle="C++"/>
                <Skill rating={2} skillTitle="React"/>
                <Skill rating={2} skillTitle="Javascript"/>
                <Skill rating={2} skillTitle="Node"/>
                <Skill rating={2} skillTitle="HTML/CSS"/>
                <Skill rating={1} skillTitle="SQL"/>
            </div>
        </div>
    )
}

module.exports = SkillsContainer;