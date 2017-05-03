var React = require('react')
var Scroll = require('react-scroll')

var PageLinkComponent = React.createClass({
    getInitialState: function() {
        return ({
            selected: false
        })
    },

    onClick: function() {
        this.setState({selected: true})
    },

    render: function (props) {
        return (
            <Scroll.Link to={this.props.link} smooth={true} duration={500}>
                <h2 className={this.props.className} style={{background: selected ? '#f2e6ff' : '#ffffff'}}>{this.props.text}</h2>
            </Scroll.Link>
        )
    }
})

module.exports = PageLinkComponent