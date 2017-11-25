import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../container/markdown';

const Job = (props) => {
  return (
    <div className='row' style={{marginTop: 20}}>
      <div className='col-xl'>
        <div className='row centered' style={{paddingBottom: 10}}>
          <img src={props.logo} className='rounded thumbnail centered' style={props.logoStyle}/>
          <div className='col-xl'>
            <h3 style={{marginBottom: 0}}>{props.title}</h3>
            <p style={{fontStyle: 'italic', marginBottom: 0}}>{props.jobTitle}</p>
            <p style={{fontStyle: 'italic'}}>{props.date}</p>
            <Markdown uri={props.description}/>
          </div>
        </div>
      </div>
    </div>
  )
};

Job.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  logoStyle: PropTypes.object,
};

export default Job;
