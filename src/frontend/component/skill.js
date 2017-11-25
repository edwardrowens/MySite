import React from 'react';
import PropTypes from 'prop-types';

import Rating from '../container/rating';

const Skill = (props) => {
  return (
    <div className='col-6 col-md-4 col-lg-3 center'>
      <h5 >{props.name}</h5>
      <Rating rating={props.rating} outOf={10}/>
    </div>
  )
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Skill;
