var React = require('react');
var Title = require('../component/Title')
var AboutMeComponent = require('../component/AboutMeComponent')
var EddieSummaryComponent = require('../component/EddieSummaryComponent')

function AboutMeContainer(props) {
    return (
        <div id="aboutMeContainer">
            <img id="logo" src="resources/assets/logo.jpg" title='Created by Will Kevans' />
            <Title text="About me" />
            <div>
                <h2 className="subTitle">Intro</h2>
                <AboutMeComponent />
            </div>
            <div>
                <h2 className="subTitle">Summary</h2>
                <EddieSummaryComponent />
            </div>
            <div>

            </div>
        </div>
    )
}

module.exports = AboutMeContainer;