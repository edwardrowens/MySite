import React from 'react'

import Title from '../view/container-title-view'
import ExperienceCard from '../view/experience-view'
import ContainerWrapper from '../view/container-wrapper-view'

export default (props) => {
    return (
        <ContainerWrapper>
            <Title>Education</Title>
            <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                <ExperienceCard year={2014} title='UCLA' background='/assets/ucla.jpg'>
                    <p>B.S. Cognitive Science, Specialization in Computing</p>
                </ExperienceCard>
            </div >
        </ContainerWrapper>
    )
}