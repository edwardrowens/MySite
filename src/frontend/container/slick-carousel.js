import React from 'react'
import Slider from 'react-slick'
import UUID from 'uuid/v4'

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
        const pagingIconsStyle =  {
            outline: 'none'
        }
        this.customPagingIcons = [
            <a id='home-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">home</i></a>,
            <a id='about-me-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">account_circle</i></a>,
            <a id='education-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">book</i></a>,
            <a id='experience-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">work</i></a>,
            <a id='skills-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">code</i></a>,
            <a id='contact-link' style={pagingIconsStyle} className="paging-link" key={UUID()}><i className="material-icons">message</i></a>
        ]

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
        const settings = {
            dotsClass: 'slick-dots slick-thumb',
            customPaging: (i) => {
                return this.customPagingIcons[i]
            },
            infinite: false,
            slidesToShow: 1,
            speed: 500,
            dots: true,
            adaptiveHeight: true,
            arrows: false
        }

        return (
            <div className="mdl-grid">
                <SlickArrowView className="mdl-cell--middle  mdl-layout--large-screen-only" onClick={this.prev} src='assets/left_arrow.png' />
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
                <SlickArrowView className="mdl-cell--middle mdl-layout--large-screen-only" onClick={this.next} src='assets/right_arrow.png' />
                <div className="mdl-tooltip" htmlFor="home-link">Home</div>
                <div className="mdl-tooltip" htmlFor="about-me-link">About me</div>
                <div className="mdl-tooltip" htmlFor="education-link">Education</div>
                <div className="mdl-tooltip" htmlFor="experience-link">Experience</div>
                <div className="mdl-tooltip" htmlFor="skills-link">Skills</div>
                <div className="mdl-tooltip" htmlFor="contact-link">Contact</div>
            </div>
        )
    }
}