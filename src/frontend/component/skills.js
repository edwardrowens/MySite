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
            <Skill name='Java' rating={9}/>
            <Skill name='JavaScript' rating={7}/>
            <Skill name='Android' rating={6}/>
            <Skill name='C++' rating={5}/>
            <Skill name='SQL' rating={5}/>
            <Skill name='HTML/CSS' rating={5}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Tools'>
          <SkillGroup>
            <Skill name='JUnit' rating={10}/>
            <Skill name='Mockito' rating={10}/>
            <Skill name='Spring' rating={8}/>
            <Skill name='React' rating={7}/>
            <Skill name='React Native' rating={6}/>
            <Skill name='Redux' rating={5}/>
            <Skill name='Redis' rating={5}/>
            <Skill name='RabbitMQ' rating={5}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Databases'>
          <SkillGroup>
            <Skill name='MySQL' rating={8}/>
            <Skill name='PostgreSQL' rating={6}/>
            <Skill name='BigQuery' rating={5}/>
            <Skill name='Elasticsearch' rating={4}/>
            <Skill name='MongoDB' rating={3}/>
          </SkillGroup>
        </SkillSet>
        <SkillSet title='Deployment'>
          <SkillGroup>
            <Skill name='Maven' rating={9}/>
            <Skill name='Git' rating={8}/>
            <Skill name='AWS' rating={7}/>
            <Skill name='GCP' rating={6}/>
            <Skill name='Docker' rating={5}/>
            <Skill name='Kubernetes' rating={4}/>
          </SkillGroup>
        </SkillSet>
      </div>
    </div>
  )
};

export default SkillsComponent;
