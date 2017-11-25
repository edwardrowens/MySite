import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import Waypoint from 'react-waypoint';

const Summary = (props) => {
  let component = null;
  if (props.fadeIn) {
    component = (
      <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 col-xl-4 text-center' style={{marginBottom: 30}}>
        <FadeIn>
          <div style={{color: props.color, fontSize: '2em'}} className={`fa ${props.icon}`}/>
          <div style={{display:'inline-block'}}>
            <p style={{
              fontSize: '1.5em',
              color: '#89bdd3',
              borderBottom: '1px solid rgb(137,189,211)',
              marginBottom: 0,
            }}>{props.title}</p>
          </div>
          <p style={{fontSize: '1.5em', color: '#89bdd3'}}>{props.text}</p>
        </FadeIn>
      </div>
    )
  }
  return (
    <Waypoint
      onEnter={(waypoint) => props.onEnter(waypoint.currentPosition === Waypoint.inside)}
    >
      {component}
    </Waypoint>
  )
};

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onEnter: PropTypes.func,
  fadeIn: PropTypes.bool,
};

export default Summary;
