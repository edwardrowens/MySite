import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import FadeIn from 'react-fade-in';

const titleStyle = {
  marginBottom: 20,
};

const SkillSet = (props) => {
  let children = null;
  if (props.fadeIn) {
    children = <FadeIn>{props.children}</FadeIn>
  }
  return (
    <Waypoint
      onEnter={(waypoint) => props.onEnter(waypoint.currentPosition === Waypoint.inside)}
    >
      <div>
        <h3 style={titleStyle}>{props.title}</h3>
        {children}
      </div>
    </Waypoint>
  );
};

SkillSet.propTypes = {
  title: PropTypes.string.isRequired,
  onEnter: PropTypes.func,
  fadeIn: PropTypes.bool,
};

export default SkillSet;
