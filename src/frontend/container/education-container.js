import React from 'react'

export default (props) => {
    return (
        <div className="mdl-grid" style={{ justifyContent: 'center', marginBottom: 30 }}>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell-middle">
                <h1 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block', margin: 'auto', textAlign: 'center', marginBottom: 50 }}>Education</h1>
            </div>
            <div className="mdl-layout-spacer"></div>
            <div className="mdl-cell mdl-cell--12-col mdl-grid" style={{ justifyContent: 'center' }}>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-card mdl-shadow--4dp mdl-cell mdl-cell--middle mdl-cell--8-col">
                    <div className="mdl-card__title mdl-card--expand" style={{ background: 'url(\'/assets/ucla.jpg\')  center / cover', padding: 0 }}>
                        <h2 className="mdl-card__title-text" style={{ background: 'rgba(0,0,0,.5)', color: '#e6f9ff', width: '100%' }}>UCLA</h2>
                    </div>
                    <div className="mdl-card__supporting-text">
                        <p>2014, B.S. Cognitive Science, Specialization in Computing</p>
                    </div>
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        </div >
    )
}