import React from 'react'

export default (props) => {
    const { className, style, onClick } = props
    style.display = 'block'
    style.background = 'red'
    return (
        <div className={className} style={style} onClick={onClick}></div>
    )
}

//<img src='assets/left_arrow.png' />