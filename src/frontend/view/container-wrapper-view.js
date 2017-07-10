import React from 'react'

export default (props) => {
    return (
        <div style={{ width: '100%', height: '100%', margin: 10, marginBottom: 30, backgroundColor: props.backgroundColor, borderRadius: 25, padding: props.padding }}>{props.children}</div>
    )
}