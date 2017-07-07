import React from 'react'

import LogoView from '../view/logo-view'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                <div className="mdl-cell-middle" style={{ height: 502 }} >
                    <h1 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block', margin: 'auto', textAlign: 'center', marginBottom: 30 }}>Welcome!</h1>
                    <LogoView style={{ width: '70%', borderRadius: 100, border: '3px solid rgba(204, 153, 255, 1)', display: 'block', margin: 'auto', marginBottom: 30 }} />
                </div>
            </div>
        )
    }
}