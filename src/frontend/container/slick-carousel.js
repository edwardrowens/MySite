import React from 'react'
import Slider from 'react-slick'

import SlickCarouselItem from '../view/slick-carousel-item-view'
import SlickArrowView from '../view/slick-arrow-view'
import AboutMeContainer from './about-me-container'
import ContactContainer from './contact-container'
import EducationContainer from './education-container'
import HomeContainer from './home-container'
import SkillsContainer from './skills-container'
import ExperienceContainer from './experience-container'
import ContainerWrapper from '../view/container-wrapper-view'

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
            infinite: false,
            slidesToShow: 1,
            speed: 500,
            dots: true,
            adaptiveHeight: true,
            arrows: false
        }

        return (
            <div className="mdl-grid">
                <SlickArrowView className="mdl-cell--middle" onClick={this.prev} src='assets/left_arrow.png' />
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell--middle" style={{ width: '80%' }}>
                    <div>
                        <Slider {...settings} ref={c => this.slider = c}>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <HomeContainer />
                                </ContainerWrapper>
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <AboutMeContainer />
                                </ContainerWrapper>
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <EducationContainer />
                                </ContainerWrapper>
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <ExperienceContainer />
                                </ContainerWrapper>
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <SkillsContainer />
                                </ContainerWrapper>
                            </SlickCarouselItem>
                            <SlickCarouselItem>
                                <ContainerWrapper>
                                    <ContactContainer />
                                </ContainerWrapper>
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