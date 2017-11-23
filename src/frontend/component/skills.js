import React from 'react';

import SkillGroup from './skill-group';
import SkillSet from '../container/skill-set';
import Skill from './skill';

const SkillsComponent = (props) => {
  return (
    <div className='jumbotron'>
      <h1 className='text-center'>Skill Proficiency</h1>
      <div className='container'>
        <SkillSet title='Languages'>
          <SkillGroup>
            <Skill name='Java' rating={90}/>
            <Skill name='Android' rating={60}/>
            <Skill name='C++' rating={50}/>
            <Skill name='SQL' rating={50}/>
            <Skill name='JavaScript' rating={100}/>
            <Skill name='HTML/CSS' rating={50}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Tools'>
          <SkillGroup>
            <Skill name='Spring' rating={80}/>
            <Skill name='React Native' rating={60}/>
            <Skill name='React' rating={70}/>
            <Skill name='Redux' rating={50}/>
            <Skill name='Redis' rating={50}/>
            <Skill name='RabbitMQ' rating={50}/>
            <Skill name='JUnit' rating={100}/>
            <Skill name='Mockito' rating={100}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Databases'>
          <SkillGroup>
            <Skill name='MySQL' rating={80}/>
            <Skill name='PostgreSQL' rating={60}/>
            <Skill name='BigQuery' rating={50}/>
            <Skill name='Elasticsearch' rating={40}/>
            <Skill name='MongoDB' rating={30}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Deployment'>
          <SkillGroup>
            <Skill name='Git' rating={80}/>
            <Skill name='Maven' rating={90}/>
            <Skill name='Kubernetes' rating={40}/>
            <Skill name='Docker' rating={50}/>
            <Skill name='GCP' rating={60}/>
            <Skill name='AWS' rating={70}/>
          </SkillGroup>
        </SkillSet>
      </div>
    </div>
  )
};

export default SkillsComponent;
