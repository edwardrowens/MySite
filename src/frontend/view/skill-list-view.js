import React from 'react'

export default (props) => {
    return (
        <ul className="mdl-list" style={{ margin: 0, padding: 0 }}>
            {props.children}
        </ul>
    )
}