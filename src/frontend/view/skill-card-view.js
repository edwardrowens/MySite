import React from 'react'
import Typist from 'react-typist'

export default (props) => {
    return (
        <div className={"mdl-card mdl-shadow--4dp mdl-cell mdl-cell--3-col mdl-cell--12-col-phone"} style={{ background: 'rgb(0,0,0)' }}>
            <div className="mdl-card__title" style={{ background: 'rgb(0,0,0)', color: '#1ec503', borderBottom: '2px solid #1ec503' }} >
                <h2 className="mdl-card__title-text" style={{ paddingLeft: 10, display: 'inline-block', fontFamily: 'Inconsolata' }}>
                    <Typist>
                        {props.title}
                    </Typist>
                </h2>
            </div>
            <div className="mdl-card__supporting-text" style={{ minWidth: 230 }}>
                {props.children}
            </div>
        </div >
    )
}