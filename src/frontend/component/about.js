import React from 'react';

import Markdown from '../container/markdown';

const AboutComponent = (props) => {
  return (
    <div className='jumbotron'>
      <h1 className='center'>About me</h1>
      <div className='container'>
        <div className='row' style={{marginBottom: 15}}>
          <div className='col-xl text-center'>
            <img src='assets/logo.jpg' className='logo'/>
          </div>
        </div>
        <div className='row'>
          <div className='col-xl centered'>
            <h5 className='subtitle'>Who am I?</h5>
            <Markdown uri='/assets/docs/aboutme.md'/>
          </div>
          <div className='col-xl'>
            <h5 className='subtitle'>What is this site?</h5>
            <Markdown uri='/assets/docs/thissite.md'/>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AboutComponent;
