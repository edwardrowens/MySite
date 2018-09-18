import React from 'react';

import SkillSet from '../container/skill-set';
import Skill from './skill';

const skillGroupStyle = {
  marginBottom: 20,
};

const SkillsComponent = (props) => {
  return (
    <div className='jumbotron'>
      <h1 className='text-center'>Skill Proficiency</h1>
      <div className='container'>
        <SkillSet title='Languages'>
          <div className='row' style={skillGroupStyle}>
            <Skill name='Java' rating={9}/>
            <Skill name='JavaScript' rating={8}/>
            <Skill name='Elixir' rating={7}/>
            <Skill name='SQL' rating={6}/>
            <Skill name='Go' rating={5}/>
            <Skill name='Python' rating={5}/>
            <Skill name='C++' rating={5}/>
            <Skill name='HTML/CSS' rating={5}/>
          </div>
        </SkillSet>
        <SkillSet title='Tools'>
          <div className='row' style={skillGroupStyle}>
            <Skill name='JUnit' rating={10}/>
            <Skill name='Mockito' rating={10}/>
            <Skill name='Spring' rating={8}/>
            <Skill name='React' rating={8}/>
            <Skill name='React Native' rating={8}/>
            <Skill name='Redux' rating={6}/>
            <Skill name='Apache Pulsar' rating={6}/>
            <Skill name='RabbitMQ' rating={5}/>
          </div>
        </SkillSet>
        <SkillSet title='Datastores'>
          <div className='row' style={skillGroupStyle}>
            <Skill name='MySQL' rating={8}/>
            <Skill name='PostgreSQL' rating={6}/>
            <Skill name='Redis' rating={5}/>
            <Skill name='BigQuery' rating={5}/>
            <Skill name='Elasticsearch' rating={4}/>
            <Skill name='MongoDB' rating={3}/>
          </div>
        </SkillSet>
        <SkillSet title='Deployment'>
          <div className='row' style={skillGroupStyle}>
            <Skill name='Maven' rating={9}/>
            <Skill name='Git' rating={8}/>
            <Skill name='Jenkins' rating={8}/>
            <Skill name='AWS' rating={9}/>
            <Skill name='GCP' rating={6}/>
            <Skill name='Docker' rating={9}/>
            <Skill name='Helm' rating={9}/>
            <Skill name='Kubernetes' rating={7}/>
          </div>
        </SkillSet>
      </div>
    </div>
  )
};

export default SkillsComponent;
