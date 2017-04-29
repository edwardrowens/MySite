var React = require('react')

function SubTitle(props) {
    return (
        <div className="subTitleContainer">
            <h2 className="subTitleText">{props.text}</h2>
        </div>
    )
}

module.exports = SubTitle;