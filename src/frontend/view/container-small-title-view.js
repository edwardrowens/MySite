import React from 'react'

export default (props) => {
    return (
        <div style={{ margin: '0 auto', textAlign: 'center', width: '100%' }}>
            <h4 className="wrapped-underlined">{props.children}</h4>
        </div>
    )
}