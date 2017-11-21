import React from 'react';
import Sensor from 'react-visibility-sensor';

const Intro = (props) => {
  return (
    <div className='jumbotron vertical-center' id={props.id}>
      <Sensor onChange={props.onVisibilityChange} offset={{top:10}}/>
      <div className='blurred-intro-image'/>
      <div className='centered text-center'>
        <h1 style={{color: '#ffffff'}}>Edward Owens</h1>
        <h2 style={{color: '#ffffff'}}>Software Engineer</h2>
      </div>
    </div>
  );
};

export default Intro;
