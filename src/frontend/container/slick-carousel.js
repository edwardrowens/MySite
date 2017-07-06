import React from 'react'
import Slider from 'react-slick'

import PreviousArrowView from '../view/previous-arrow-view'
import SlickCarouselItem from '../component/dynamic-slick-carousel-item-component'
import NextArrowView from '../view/next-arrow-view'
import SlickArrowView from '../view/slick-arrow-view'
import AboutMeContainer from './about-me-container'
import ContactContainer from './contact-container'
import EducationContainer from './education-container'
import HomeContainer from './home-container'
import SkillsContainer from './skills-container'
import ExperienceContainer from './experience-container'

export default class SlickCarousel extends React.Component {
    constructor(props) {
        super(props)
        this.next = this.next.bind(this)
        this.prev = this.prev.bind(this)
    }

    next() {
        this.slider.slickNext()
    }

    prev() {
        this.slider.slickPrev()
    }

    render() {
        let settings = {
            className: 'center',
            centerMode: true,
            infinite: false,
            centerPadding: '60px',
            slidesToShow: 2,
            speed: 500,
            dots: true
        }
        console.log(JSON.stringify(this.props))

        return (
            <div className="mdl-grid">
                <SlickArrowView className="mdl-cell--middle" onClick={this.prev} src='assets/left_arrow.png' />
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell--middle" style={{ width: '80%' }}>
                    <div>
                        <Slider {...settings} ref={c => this.slider = c}>
                            <SlickCarouselItem>
                             <AboutMeContainer />
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                             <EducationContainer />
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                             <ExperienceContainer />
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                             <SkillsContainer />
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                             <ContactContainer />
                            </SlickCarouselItem>
                        </Slider>
                    </div>
                </div>
                <div className="mdl-layout-spacer"></div>
                <SlickArrowView className="mdl-cell--middle" onClick={this.next} src='assets/right_arrow.png' />
            </div>
        )
    }
}