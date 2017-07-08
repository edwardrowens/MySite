import React from 'react'

export default (props) => {
    let width = props.width ? props.width : 4
    let color = props.color ? props.color : '#cc99ff'
    return (
        <div className={"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--" + width + "-col"}>
            <div className="mdl-card__title mdl-card--expand" style={props.titleStyle}>
                <h2 className="mdl-card__title-text" style={{ background: 'rgba(0,0,0,.5)', color: '#e6f9ff', width: '100%', paddingLeft: 10 }}>{props.title}</h2>
            </div>
            <div className="mdl-card__supporting-text">
                {props.children}
            </div>
            <div className="mdl-card__menu" style={{ width: 30, height: 30, borderRadius: 20, padding: 5, background: color }}>
                <p style={{ color: 'white' }}>{props.year}</p>
            </div>
        </div >
    )
}