import React from 'react';
import PropTypes from 'prop-types';
import FadeIn from 'react-fade-in';

const iconTextStyle = {
  marginLeft: 20,
  fontSize: '.95em'
};

const ContactIconComponent = (props) => {
  if (props.animate) {
    return (
      <div className='col'>
        <FadeIn>
          <div className='row' style={{minWidth: 315}}>
            <a target="_blank" className={`icon`} href={props.href}><i className={`fa ${props.icon}`}/></a>
            <p className='vertical-center' style={iconTextStyle}>{props.text}</p>
          </div>
        </FadeIn>
      </div>
    )
  } else {
    return null;
  }
};

ContactIconComponent.propTypes = {
  icon: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  animate: PropTypes.bool,
};

export default ContactIconComponent;
