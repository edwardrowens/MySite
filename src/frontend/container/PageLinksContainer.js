var React = require('react')

var PageLinkComponent = require('../component/PageLinkComponent')
var VerticalLineComponent = require('../component/VerticalLineComponent')

function PageLinksContainer(props) {
    return (
        <div id="pageLinks">
            <ul>
                <li><PageLinkComponent previewText="A" link="contentContainer" text="About Me"/></li>
                <li><PageLinkComponent previewText="Ex" link="workexperience" text="Experience"/></li>
                <li><PageLinkComponent previewText="Ed" link="education" text="Education"/></li>
                <li><PageLinkComponent previewText="S" link="skills" text="Skills"/></li>
                <li><PageLinkComponent previewText="C" link="contact" text="Contact"/></li>
            </ul>
        </div>
    )
}

module.exports = PageLinksContainer