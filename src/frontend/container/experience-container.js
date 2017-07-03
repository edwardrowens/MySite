import React from 'react'

import ResponsiveCard from '../view/responsive-titled-card-view'

export default (props) => {
    return (
        <ResponsiveCard key={props.key} title='experience' style={props.style}>
            <div>experience</div>
        </ResponsiveCard>
    )
}