import React from 'react';

const SkillsComponent = (props) => {
  return (
    <div className='jumbotron' id={props.id}>
      <Sensor onChange={props.onVisibilityChange} offset={{bottom: 300}}/>
      <h1 className='text-center'>Contact</h1>
      <div className='container'>
        <div className='row'>
        </div>
      </div>
    </div>
  )
};

export default SkillsComponent;
