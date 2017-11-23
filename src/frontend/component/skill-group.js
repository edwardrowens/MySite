import React from 'react';
import PropTypes from 'prop-types';

const SkillGroup = (props) => {
  return (
    <div className='row' style={{marginBottom: 20}}>
      {props.children}
    </div>
  )
};

SkillGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default SkillGroup;
