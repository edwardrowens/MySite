import React from 'react';
import Waypoint from 'react-waypoint';

const Intro = (props) => {
  return (
    <Waypoint
      topOffset={'45%'}
      bottomOffset={'45%'}
      onEnter={(waypoint)=>props.onVisibilityChange(waypoint.currentPosition === Waypoint.inside)}
    >
    <div className='jumbotron vertical-center' id={props.id}>
      <div className='blurred-intro-image'/>
      <div className='centered text-center'>
        <h1 style={{color: '#ffffff'}}>Edward Owens</h1>
        <h2 style={{color: '#ffffff'}}>Software Engineer</h2>
      </div>
    </div>
    </Waypoint>
  );
};

export default Intro;
