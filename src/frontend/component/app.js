import React from 'react';

import Intro from '../container/intro';
import About from '../container/about';
import Experience from '../container/experience';
import Contact from '../container/contact';

const app = (props) => {
  return (
    <div>
      <Intro/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  )
};

export default app;
