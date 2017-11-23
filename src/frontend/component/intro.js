import React from 'react';
import FadeIn from 'react-fade-in';
import Waypoint from 'react-waypoint';
import PropTypes from 'prop-types';

const Intro = (props) => {
  let text = null;
  if (props.animate) {
    text = <FadeIn>
      <h1 style={{color: '#ffffff'}}>Edward Owens</h1>
      <h2 style={{color: '#ffffff'}}>Software Engineer</h2>
    </FadeIn>
  }
  return (
    <Waypoint
      topOffset={'45%'}
      bottomOffset={'45%'}
      onEnter={(waypoint) => props.onEnter(waypoint.currentPosition === Waypoint.inside)}
    >
      <div className='jumbotron vertical-center'>
        <div className='blurred-intro-image'/>
        <div className='centered text-center'>
          {text}
        </div>
      </div>
    </Waypoint>
  );
};

Intro.propTypes = {
  animate: PropTypes.bool,
  onEnter: PropTypes.func,
};

export default Intro;
