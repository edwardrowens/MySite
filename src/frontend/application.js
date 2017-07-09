import React from 'react'
import ReactDOM from 'react-dom'
import UUID from 'uuid/v4'

import SlickCarousel from './container/slick-carousel'
import AboutMeContainer from './container/about-me-container'
import ContactContainer from './container/contact-container'
import EducationContainer from './container/education-container'
import HomeContainer from './container/home-container'
import SkillsContainer from './container/skills-container'
import ExperienceContainer from './container/experience-container'

class Application extends React.Component {
    constructor(props) {
        super(props)

        this.customPage = this.customPage.bind(this)

        // React slick does not work with custom paging being react components
        this.customPaging = [
            <a id="home-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">home</i></a>,
            <a id="about-me-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">face</i></a>,
            <a id="education-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">book</i></a>,
            <a id="experience-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">work</i></a>,
            <a id="skills-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">code</i></a>,
            <a id="contact-link" style={{ outline: 'none' }} className="paging-link" key={UUID()}><i className="material-icons">message</i></a>
        ]

        this.carouselSettings = {
            dotsClass: 'slick-dots slick-thumb',
            customPaging: this.customPage,
            infinite: false,
            slidesToShow: 1,
            speed: 500,
            dots: true,
            adaptiveHeight: true,
            arrows: false
        }
    }

    customPage(i) {
        return this.customPaging[i]
    }

    render() {
        return (
            <div className="mdl-layout mdl-js-layout" >
                <div className="mdl-layout-spacer mdl-layout--large-screen-only" ></div>
                <SlickCarousel settings={this.carouselSettings}>
                    <HomeContainer />
                    <AboutMeContainer />
                    <EducationContainer />
                    <ExperienceContainer />
                    <SkillsContainer />
                    <ContactContainer />
                </SlickCarousel>
                <div className="mdl-layout-spacer mdl-layout--large-screen-only" ></div>
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

ReactDOM.render(<Application />, document.getElementById('app'))