import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';

import ContactIcon from './contact-icon';

const ContactComponent = (props) => {
  return (
    <Waypoint
      topOffset={'45%'}
      bottomOffset={'45%'}
      onEnter={(waypoint) => props.onEnter(waypoint.currentPosition === Waypoint.inside)}
    >
      <div className='jumbotron contact-image'>
        <h1 className='text-center'>Contact</h1>
        <div className='container'>
          <div className='row'>
            <ContactIcon icon='fa-github' href='https://github.com/edwardrowens' text='edwardrowens'
                         animate={props.animate}/>
            <ContactIcon icon='fa-linkedin-square' href='https://www.linkedin.com/in/edward-owens-9a36aaaa/'
                         text='Edward-Owens-9a36aaaa' animate={props.animate}/>
            <ContactIcon icon='fa-envelope' href='mailto:edwardrowens@gmail.com' text='edwardrowens@gmail.com'
                         animate={props.animate}/>
          </div>
        </div>
      </div>
    </Waypoint>
  )
};

ContactComponent.propTypes = {
  onEnter: PropTypes.func,
  animate: PropTypes.bool,
  id: PropTypes.string,
};

export default ContactComponent;
