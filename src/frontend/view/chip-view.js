import React from 'react'

export default (props) => {
    return (
        <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
            <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: props.contactColor }}>{props.contactText}</span>
            <span className="mdl-chip__text">{props.children}</span>
        </span>
    )
}