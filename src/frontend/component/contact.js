import React from 'react';
import Sensor from 'react-visibility-sensor';

import ContactIcon from './contact-icon';

const ContactComponent = (props) => {
  return (
    <div className='jumbotron contact-image' id={props.id}>
      <Sensor onChange={props.onVisibilityChange} offset={{bottom: 300}}/>
      <h1 className='text-center'>Contact</h1>
      <div className='container'>
        <div className='row'>
          <ContactIcon icon='ion-social-github' href='https://github.com/edwardrowens' text='edwardrowens'
                       animate={props.animate}/>
          <ContactIcon icon='ion-social-linkedin' href='https://www.linkedin.com/in/edward-owens-9a36aaaa/'
                       text='Edward-Owens-9a36aaaa' animate={props.animate}/>
          <ContactIcon icon='ion-email' href='mailto:edwardrowens@gmail.com' text='edwardrowens@gmail.com'
                       animate={props.animate}/>
        </div>
      </div>
    </div>
  )
};

export default ContactComponent;
