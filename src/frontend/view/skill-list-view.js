import React from 'react'

export default (props) => {
    return (
        <ul className="mdl-list">
            {props.children}
        </ul>
    )
}