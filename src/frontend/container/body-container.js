import React from 'react'
import { Switch, Route } from 'react-router-dom'
import UUID from 'uuid/v4'

import TransitionAnimationView from '../view/transition-animation-view'
import HomeContainer from './home-container'
import AboutMeContainer from './about-me-container'
import ExperienceContainer from './experience-container'
import EducationContainer from './education-container'
import SkillsContainer from './skills-container'
import ContactContainer from './contact-container'

export default class BodyContainer extends React.Component {
    constructor(props) {
        super(props)

        this.containers = [
            <AboutMeContainer key={UUID()} />,
            <HomeContainer key={UUID()} />,
            <ExperienceContainer key={UUID()} />,
            <EducationContainer key={UUID()} />,
            <SkillsContainer key={UUID()} />,
            <ContactContainer key={UUID()} />
        ]

        this.state = {
            index: 0,
            animateFromRight: true
        }

        this.setState = this.setState.bind(this)
        this.onNextContainer = this.onNextContainer.bind(this)
        this.onPreviousContainer = this.onPreviousContainer.bind(this)
    }

    onNextContainer() {
        if (this.state.index < this.containers.length - 1) {
            this.setState({ index: ++this.state.index, animateFromRight: true })
        }
    }

    onPreviousContainer() {
        if (this.state.index > 0) {
            this.setState({ index: --this.state.index, animateFromRight: false })
        }
    }

    render() {
        return (
            <div className='mdl-grid'>
                <div className="mdl-cell--middle">
                    <img src='assets/left_arrow.png' onClick={this.onPreviousContainer} />
                </div>
                <div className="mdl-layout-spacer"></div>
                <TransitionAnimationView animateFromRight={this.state.animateFromRight} className="mdl-cell mdl-cell--4-col" style={{ display: 'inline-block' }}>
                    {this.containers[this.state.index]}
                </TransitionAnimationView>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell--middle">
                    <img src='assets/right_arrow.png' onClick={this.onNextContainer} />
                </div>
            </div >
        )
    }
} 
