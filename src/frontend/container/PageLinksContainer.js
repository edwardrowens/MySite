var React = require('react')

var PageLinkComponent = require('../component/PageLinkComponent')

function PageLinksContainer(props) {
    return (
        <div id="pageLinks">
            <ul>
                <li><PageLinkComponent text="A" link="resume"/></li>
                <li><PageLinkComponent text="W" link="workexperience"/></li>
                <li><PageLinkComponent text="E" link="education"/></li>
                <li><PageLinkComponent text="S" link="skills"/></li>
                <li><PageLinkComponent text="C" link="contact"/></li>
            </ul>
        </div>
    )
}

module.exports = PageLinksContainer