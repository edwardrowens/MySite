import React from 'react';
import moment from 'moment';

import Summary from '../container/summary';

const subtitleStyle = {
  display: 'inline-block',
  borderBottom: '1px solid rgb(137,189,211)',
  color: '#949392',
  marginBottom: 40,
};

const AboutComponent = (props) => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center' style={{marginBottom: 30}}>
            <h2 style={subtitleStyle}>About Me</h2>
          </div>
          <div className='col-12 text-center' style={{marginBottom: 30}}>
            <img src='assets/beach_pic.jpg' className='logo'/>
          </div>
          <div className='col-12 push-6 text-center'>
            <div className='row'>
              <Summary icon='fa-user' color='#9ad3de' text='Edward Owens' title='Name'/>
              <Summary icon='fa-home' color='#9ad3de' text='Los Angeles' title='City'/>
              <Summary icon='fa-graduation-cap' color='#9ad3de' text='June, 2014' title='Graduated UCLA'/>
              <Summary icon='fa-h-square' color='#9ad3de' text={moment().diff('1992-06-17', 'years')} title='Age'/>
              <Summary icon='fa-connectdevelop' color='#9ad3de' text='Cognitive Science' title='Degree'/>
              <Summary icon='fa-crosshairs' color='#9ad3de' text='Backend/Infrastructure' title='Focus'/>
              <Summary icon='fa-server' color='#9ad3de' text={moment().diff('2014-06-14', 'years')}
                       title='Years working backend'/>
              <Summary icon='fa-code' color='#9ad3de' text={moment().diff('2016-09-01', 'years')}
                       title='Years working frontend'/>
            </div>
            <h2 style={subtitleStyle}>This site</h2>
            <div className='row'>
              <Summary icon='fa-code' color='#9ad3de' text='React/Bootstrap' title='Frontend'/>
              <Summary icon='fa-server' color='#9ad3de' text='Node' title='Backend'/>
              <Summary icon='fa-cloud ' color='#9ad3de' text='Gcloud' title='Running on'/>
              <Summary icon='fa-archive' color='#9ad3de' text='Docker' title='Containerized by'/>
              <Summary icon='fa-empire' color='#9ad3de' text='Kubernetes' title='Orchestrated with'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;
