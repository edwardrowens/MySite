var React = require('react')
var Scroll = require('react-scroll')

var PageLinkComponent = React.createClass({
    render: function (props) {
        return (
            <Scroll.Link to={this.props.link} smooth={true} duration={500}><h2 id="pageLinkComponent">{this.props.text}</h2></Scroll.Link>
        )
    }
})

module.exports = PageLinkComponent