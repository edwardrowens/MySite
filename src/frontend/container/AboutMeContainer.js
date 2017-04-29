var React = require('react');
var Title = require('../component/Title')

function AboutMeContainer(props) {
    return (
        <div id="aboutMeContainer">
            <Title text="About me" />
            <img id="logo" src="resources/assets/logo.jpg" title='Created by Will Kevans'/>
        </div>
    )
}

module.exports = AboutMeContainer;