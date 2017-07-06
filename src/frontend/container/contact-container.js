import React from 'react'

import ResponsiveCard from '../view/responsive-titled-card-view'

export default (props) => {
    return (
        <ResponsiveCard className={props.className} key={props.key} title='contact' style={props.style}>
            <div>contact</div>
        </ResponsiveCard>
    )
}