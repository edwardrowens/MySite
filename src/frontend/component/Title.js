var React = require('react')

function Title(props) {
    return (
        <div id="titleTextContainer">
            <h1 id="titleText">{props.text}</h1>
        </div>
    )
}

module.exports = Title;