import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';
import Waypoint from 'react-waypoint';

const Item = (props) => {
  let component = null;
  if (props.fadeIn) {
    component = (
      <div className='col-lg-6 col-md-6 col-xs-12 text-center' style={{marginBottom: 30}}>
        <div style={{display: 'inline-block', width: '50%', padding: 10, borderRadius: 20}}>
          <FadeIn>
            <div style={{color: props.color, fontSize: '2em'}} className={`fa ${props.icon}`}/>
            <p style={{
              marginBottom: 5,
              marginLeft: 8,
              fontSize: '1.5em',
              color: '#89bdd3',
              borderBottom: '1px solid rgb(137,189,211)'
            }}>{props.title}</p>
            <p style={{fontSize: '1.5em', color: '#89bdd3'}}>{props.text}</p>
          </FadeIn>
        </div>
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

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
  fadeIn: PropTypes.bool,
};

export default Item;
