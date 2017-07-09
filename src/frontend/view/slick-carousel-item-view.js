import React from 'react'

export default (props) => {
    return (
        <div {...props}>
            <div className="mdl-grid">
                <div className="mdl-layout-spacer mdl-layout--large-screen-only"></div>
                {props.children}
                <div className="mdl-layout-spacer mdl-layout--large-screen-only"></div>
            </div>
        </div>
    )
}