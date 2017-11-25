import React from 'react';
import Item from '../container/item';

const AboutComponent = (props) => {
  return (
    <div className='jumbotron'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center' style={{marginBottom: 30}}>
            <h2
              style={{display: 'inline-block', borderBottom: '1px solid rgb(137,189,211)', color: '#949392'}}>About
              Me</h2>
          </div>
          <div className='col-lg-12 text-center'>
            <img src='assets/beach_pic.jpg' className='logo'/>
          </div>
          <div className='col-12 push-6 text-center'>
            <div className='row'>
              <Item icon='fa-user' color='#9ad3de' text='Edward Owens' title='Name'/>
              <Item icon='fa-home' color='#9ad3de' text='Los Angeles' title='City'/>
            </div>
            <div className='row'>
              <Item icon='fa-bullseye ' color='#9ad3de' text='Java/JavaScript' title='Focus'/>
              <Item icon='fa-h-square' color='#9ad3de' text='25' title='Age'/>
            </div>
            <div className='row'>
              <Item icon='fa-server' color='#9ad3de' text='3' title='Years working backend'/>
              <Item icon='fa-code' color='#9ad3de' text='1' title='Years working frontend'/>
            </div>
            <h2 style={{display: 'inline-block', borderBottom: '1px solid rgb(137,189,211)', color: '#949392'}}>This
              site</h2>
            <div className='row'>
              <Item icon='fa-code' color='#9ad3de' text='React/Bootstrap' title='Frontend'/>
              <Item icon='fa-server' color='#9ad3de' text='Node' title='Backend'/>
            </div>
            <div className='row'>
              <Item icon='fa-cloud ' color='#9ad3de' text='Gcloud' title='Running on'/>
              <Item icon='fa-archive' color='#9ad3de' text='Docker' title='Containerized by'/>
            </div>
            <div className='row'>
              <Item icon='fa-connectdevelop' color='#9ad3de' text='Kubernetes' title='Orchestrated with'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;
