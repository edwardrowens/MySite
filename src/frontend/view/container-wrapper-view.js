import React from 'react'

export default (props) => {
    return (
        <div style={{ width: '100%', height: '100%' }} className="mdl-card">{props.children}</div>
    )
}