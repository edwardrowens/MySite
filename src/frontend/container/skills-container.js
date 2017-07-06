import React from 'react'

import ResponsiveCard from '../view/responsive-titled-card-view'

export default (props) => {
    return (
        <ResponsiveCard className={props.className} key={props.key} title='skills' style={props.style}>
            <div>skills</div>
        </ResponsiveCard>
    )
}