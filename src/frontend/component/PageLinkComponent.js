var React = require('react')
var Scroll = require('react-scroll')

var PageLinkComponent = React.createClass({
    getInitialState: function() {
        return {displayText: false}
    },

    onMouseOver: function() {
        this.setState({displayText: true})
    },

    onMouseLeave: function() {
        this.setState({displayText: false})
    },

    render: function (props) {
        return (
            <Scroll.Link to={this.props.link} smooth={true} duration={500}><h2 id="pageLinkComponent" onMouseLeave={this.onMouseLeave} onMouseOver={this.onMouseOver}>{this.state.displayText ? this.props.text : this.props.previewText}</h2></Scroll.Link>
        )
    }
})

module.exports = PageLinkComponent