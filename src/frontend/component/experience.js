import React from 'react';

import Job from '../component/job';

const ExperienceComponent = (props) => {
  return (
    <div className='jumbotron'>
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
  )
};

export default ExperienceComponent;
