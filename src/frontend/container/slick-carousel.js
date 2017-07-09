import React from 'react'
import Slider from 'react-slick'
import UUID from 'uuid/v4'

import SlickCarouselItem from '../view/slick-carousel-item-view'
import SlickArrowView from '../view/slick-arrow-view'

export default class SlickCarousel extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 0,
            height: 0
        }

        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
        this.setState = this.setState.bind(this)
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this)
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }

    next() {
        this.slider.slickNext()
    }

    prev() {
        this.slider.slickPrev()
    }

    render() {
        const carouselItems = this.props.children.map((child) => {
            return <SlickCarouselItem key={UUID()}>{child}</SlickCarouselItem>
        })
        return (
            <div style={{ marginBottom: 80 }}>
                <div className="mdl-grid" style={{ width: '100%' }}>
                    <SlickArrowView className="mdl-cell--middle mdl-layout--large-screen-only" onClick={this.prev} src='assets/left_arrow.png' />
                    <div className="mdl-layout-spacer mdl-layout--large-screen-only"></div>
                    <div className="mdl-cell--middle" style={{ width: this.state.width > 1025 ? '80%' : '100%' }}>
                        <Slider {...this.props.settings} ref={c => this.slider = c}>
                            {carouselItems}
                        </Slider>
                    </div>
                    <div className="mdl-layout-spacer mdl-layout--large-screen-only"></div>
                    <SlickArrowView className="mdl-cell--middle mdl-layout--large-screen-only" onClick={this.next} src='assets/right_arrow.png' />
                </div>
            </div>
        )
    }
}