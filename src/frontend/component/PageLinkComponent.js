var React = require('react')
var Scroll = require('react-scroll')

function PageLinkComponent(props) {
    return (
        <Scroll.Link to={props.link} smooth={true} duration={500}>
            <li style={{ background: props.isVisible ? '#f2e6ff' : '#ffffff' }}>
                <h2>{props.text}</h2>
            </li>
        </Scroll.Link>
    )
}

module.exports = PageLinkComponent