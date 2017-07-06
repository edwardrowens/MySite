import React from 'react'

export default (props) => {
    let className = props.className + " mdl-card mdl-shadow--4dp"
    return (
        <div key={props.key} className={className} style={props.style}>
            <div className="mdl-card__title">
                <h1 className="mdl-card__title-text">{props.title}</h1>
            </div>
            <div style={props.contentStyle}>
                {props.children}
            </div>
        </div >
    )
}