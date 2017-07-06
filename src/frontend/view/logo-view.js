import React from 'react'

export default (props) => {
    let style = props.style
    // style.borderRadius = '100%'
    // style.border = '5px solid #cc99ff'
    return (
        <img style={style} src='assets/logo.jpg' title='Created by Will Kevans' />
    )
}