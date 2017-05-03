var React = require('react')

var PageLinkComponent = require('../component/PageLinkComponent')
var VerticalLineComponent = require('../component/VerticalLineComponent')

var PageLinksContainer = React.createClass({
    render: function (props) {
        return (
            <div id="pageLinks">
                <ul>
                    <li><PageLinkComponent link="contentContainer" text="About Me" /></li>
                    <li><PageLinkComponent link="workexperience" text="Experience" /></li>
                    <li><PageLinkComponent link="education" text="Education" /></li>
                    <li><PageLinkComponent link="skills" text="Skills" /></li>
                    <li><PageLinkComponent link="contact" text="Contact" /></li>
                </ul>
            </div>
        )
    }
})

module.exports = PageLinksContainer