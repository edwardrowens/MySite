var React = require('react')

var style = {
    position:'fixed',
	width:'100%',
	height:'2%',
	top:'0%',
    pointerEvents: 'none'
}

function VisibilitySensorWindow(props) {
    return (
        <div id="visibilitySensorWindow" style={style}></div>
    )
}

module.exports = VisibilitySensorWindow