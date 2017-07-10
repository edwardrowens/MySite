import React from 'react'

export default (props) => {
    return (
        <div style={{ margin: '0 auto', textAlign: 'center', width: '100%' }}>
            <h1 className="wrapped-underlined">{props.children}</h1>
        </div>
    )
}