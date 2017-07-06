import React from 'react'

import ResponsiveTitledCardView from '../view/responsive-titled-card-view'
import LogoView from '../view/logo-view'

export default (props) => {
    return (
        <ResponsiveTitledCardView className={props.className} key={props.key} title='my logo' style={props.style}>
            <LogoView />
        </ResponsiveTitledCardView>
    )
}