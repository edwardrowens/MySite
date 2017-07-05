import React from 'react'
import Slider from 'react-slick'

import PreviousArrowView from '../view/previous-arrow-view'
import NextArrowView from '../view/next-arrow-view'
import SlickArrowView from '../view/slick-arrow-view'

export default class SlickCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    next() {
        this.ref.Slider.slickNext()
    }

    prev() {
        this.Slider.slickPrev()
    }

    render() {
        let settings = {
            className: 'center',
            centerMode: true,
            infinite: true,
            centerPadding: '60px',
            slidesToShow: 2,
            speed: 500,
            dots: true
        }
        console.log(JSON.stringify(this.props))

        return (
            <div>
                <SlickArrowView style={{ display: 'inline-block' }} className="mdl-cell--middle" onClick={this.prev} src='assets/left_arrow.png' />
                <div className="mdl-cell--middle" style={{ width: '80%', display: 'inline-block' }}>
                    <div>
                        <Slider {...settings}>
                            <div><h3>1</h3></div>
                            <div><h3>2</h3></div>
                            <div><h3>3</h3></div>
                            <div><h3>4</h3></div>
                            <div><h3>5</h3></div>
                        </Slider>
                    </div>
                </div>
                <SlickArrowView style={{ display: 'inline-block' }} className="mdl-cell--middle" onClick={this.next} src='assets/right_arrow.png' />
            </div>
        )
    }
}