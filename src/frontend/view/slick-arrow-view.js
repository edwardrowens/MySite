import React from 'react'
import MediaQuery from 'react-responsive'

export default (props) => {
    return (
        <div className={props.className} style={props.style} onClick={props.onClick}><img src={props.src} /></div>
    )
}