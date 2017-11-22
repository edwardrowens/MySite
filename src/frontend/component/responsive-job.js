import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import Job from './job';

const ResponsiveJob = (props) => {
  return (
    <MediaQuery minDeviceWidth={1119}>
      {
        (matches) => {
          if (matches) {
            return <Job {...props} width='85%' />;
          } else {
            return <Job {...props} width='100%'/>;
          }
        }
      }
    </MediaQuery>
  )
};

ResponsiveJob.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  logoStyle: PropTypes.object,
};

export default ResponsiveJob;
