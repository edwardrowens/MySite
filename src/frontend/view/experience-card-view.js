import React from 'react'

export default (props) => {
    let width = props.width ? props.width : 4
    let color = props.color ? props.color : '#498fff'
    let titleStyle = props.titleStyle ? props.titleStyle : {}
    titleStyle.background = 'url(' + props.background + ')  center / cover'
    titleStyle.padding = 0
    return (
        <div className={"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--" + width + "-col"} style={props.style}>
            <div className="mdl-card__title mdl-card--expand" style={titleStyle}>
                <h2 className="mdl-card__title-text" style={{ background: 'rgba(0,0,0,.5)', color: '#e6f9ff', width: '100%', paddingLeft: 10 }}>{props.title}</h2>
            </div>
            <div className="mdl-card__supporting-text">
                {props.children}
            </div>
            <div className="mdl-card__menu" style={{ width: 30, height: 30, borderRadius: 20, padding: 5, background: color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ color: 'white', margin: 0 }}>{props.year}</p>
            </div>
        </div >
    )
}