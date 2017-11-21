import React from 'react';
import Sensor from 'react-visibility-sensor';

const ContactComponent = (props) => {
  return (
    <div className='jumbotron' id={props.id}>
      <Sensor onChange={props.onVisibilityChange} offset={{bottom: 300}}/>
      <h1 className='text-center'>Contact</h1>
      <div className='container' style={{height: '100vh'}}>
        <div className='row justify-content-center'>
          <div className='col'>
            <div className='text-center'>
              <a className='ion-social-github icon' href='https://github.com/edwardrowens'/>
            </div>
          </div>
          <div className='col'>
            <div className='text-center'>
              <a className='ion-social-linkedin icon' href='https://www.linkedin.com/in/edward-owens-9a36aaaa/'/>
            </div>
          </div>
          <div className='col'>
            <div className='text-center'>
              <a className='ion-email icon' href='mailto:edwardrowens@gmail.com'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ContactComponent;
