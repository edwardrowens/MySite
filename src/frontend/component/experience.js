import React from 'react';
import Waypoint from 'react-waypoint';

import Job from './responsive-job';

const ExperienceComponent = (props) => {
  return (
    <Waypoint
      topOffset={'45%'}
      bottomOffset={'45%'}
      onEnter={(waypoint) => props.onVisibilityChange(waypoint.currentPosition === Waypoint.inside)}
    >
      <div className='jumbotron' id={props.id}>
        <h1 className='text-center'>Experience</h1>
        <Job
          title='Gimbal'
          jobTitle='Software Engineer'
          date='Aug 2017 - Nov 2017'
          description='/assets/docs/gimbal_job_description.md'
          logo='/assets/gimbal.jpg'
        />
        <Job
          title='Gamblit Gaming'
          jobTitle='Software Engineer'
          date='Nov 2016 - Aug 2017'
          description='/assets/docs/gamblit_job_description.md'
          logo='/assets/gamblit.png'
          logoStyle={{minWidth: 175}}
        />
        <Job
          title='Alfa'
          jobTitle='Technical Consultant'
          date='Sep 2015 - Nov 2016'
          description='/assets/docs/alfa_job_description.md'
          logo='/assets/alfa.png'
          logoStyle={{minWidth: 175}}
        />
      </div>
    </Waypoint>
  )
};

export default ExperienceComponent;
