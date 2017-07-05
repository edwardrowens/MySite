import React from 'react'
import Slider from 'react-slick'

export default (props) => {
    const { className, style, onClick } = props
    style.display = 'block'
    style.background = 'red'
    return (
        <div className={className} style={style} onClick={onClick}></div>
    )
}

//<img id="arrow_image" src='assets/right_arrow.png' />