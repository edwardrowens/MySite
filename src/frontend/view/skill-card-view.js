import React from 'react'

export default (props) => {
    return (
        <div className={"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--4-col"} style={props.style}>
            <div className="mdl-card__title mdl-card--expand" style={props.titleStyle}>
                <h2 className="mdl-card__title-text" style={{ background: 'rgba(0,0,0,.5)', color: '#e6f9ff', width: '100%', paddingLeft: 10 }}>{props.title}</h2>
            </div>
            <div className="mdl-card__supporting-text">
                {props.children}
            </div>
        </div >
    )
}