import React from 'react'

import LogoView from '../view/logo-view'
import Title from '../view/container-title-view'
import ContainerWrapper from '../view/container-wrapper-view'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ContainerWrapper>
                <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                    <div className="mdl-cell-middle" style={{ height: 502 }} >
                        <Title>Welcome!</Title>
                        <LogoView style={{ width: '70%', borderRadius: 100, border: '3px solid rgba(204, 153, 255, 1)', display: 'block', margin: 'auto', marginBottom: 30 }} />
                    </div>
                </div>
            </ContainerWrapper>
        )
    }
}