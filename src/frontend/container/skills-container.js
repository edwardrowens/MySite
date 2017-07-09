import React from 'react'

import ContainerWrapper from '../view/container-wrapper-view'
import Title from '../view/container-title-view'
import SkillCard from '../view/skill-card-view'
import Skill from '../view/skill-view'
import SkillList from '../view/skill-list-view'

export default (props) => {
    return (
        <ContainerWrapper>
            <Title>Skills</Title>
            <div className="mdl-grid">
                <SkillCard title="Languages">
                    <SkillList>
                        <Skill name='Java' rating={4} />
                        <Skill name='Android' rating={3} />
                        <Skill name='C++' rating={3} />
                        <Skill name='SQL' rating={3} />
                        <Skill name='Javascript' rating={3} />
                        <Skill name='HTML/CSS' rating={3} />
                    </SkillList>
                </SkillCard>
                <SkillCard title="Frameworks and Libraries">
                    <SkillList>
                        <Skill name='Node' rating={3} />
                        <Skill name='Retrofit' rating={3} />
                        <Skill name='Socket.io' rating={3} />
                        <Skill name='Spring Boot' rating={3} />
                        <Skill name='Google Maps Places Directions APIs' rating={3} />
                        <Skill name='Guice' rating={3} />
                        <Skill name='Picasso' rating={3} />
                        <Skill name='Dagger' rating={3} />
                    </SkillList>
                </SkillCard>
                <SkillCard title="Dev Utilities">
                    <SkillList>
                        <Skill name='Kubernetes' rating={2} />
                        <Skill name='Google Cloud Platform' rating={2} />
                        <Skill name='Docker' rating={2} />
                        <Skill name='Maven' rating={3} />
                        <Skill name='Git' rating={3} />
                        <Skill name='Gradle' rating={1} />
                    </SkillList>
                </SkillCard>
                <SkillCard title="Programming Concepts">
                    <SkillList>
                        <Skill name='OOP' rating={5} />
                        <Skill name='N-tier' rating={5} />
                        <Skill name='Command Pattern' rating={5} />
                        <Skill name='Dependency Injection' rating={4} />
                        <Skill name='Networking' rating={3} />
                        <Skill name='Game Development' rating={2} />
                        <Skill name='Factory Pattern' rating={4} />
                        <Skill name='Multithreading and Concurrency' rating={3} />
                        <Skill name='Algorithms' rating={3} />
                        <Skill name='Event Driven' rating={4} />
                    </SkillList>
                </SkillCard>
            </div>
        </ContainerWrapper>
    )
}