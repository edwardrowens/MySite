import React from 'react'

export default (props) => {
    return (
        <a href={props.href} target={props.target} style={{ margin: 20 }}>
            <img src={props.src} className="hover-expand" style={{ border: '5px solid #cc99ff', transition: 'all .1s linear', borderRadius: '100%' }} />
        </a>
    )
}