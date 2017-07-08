import React from 'react'

export default (props) => {
    return (
        <div className="mdl-grid" style={{ justifyContent: 'center' }}>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell-middle">
                <h1 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block', margin: 'auto', textAlign: 'center', marginBottom: 50 }}>Education</h1>
            </div>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--6-col">
                <div className="mdl-card__title mdl-card--expand" style={{ background: 'url(\'/assets/ucla.jpg\')  center / cover' }}>
                </div>
                <div className="mdl-card__supporting-text">hi</div>
            </div>
        </div >
    )
}