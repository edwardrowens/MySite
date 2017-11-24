import React from 'react';
import PropTypes from 'prop-types';

const Rating = (props) => {
  return (
    <div className={props.className}>
      <svg width={props.width} height={props.height} fontSize='1.8em'>
        <circle stroke={props.backgroundColor} strokeWidth="9" fill="none"
                cx={props.width / 2}
                cy={props.height / 2} r={props.radius}/>
        <circle className="transform-90" stroke={props.barColor} strokeWidth="10"
                strokeDasharray={props.strokeDashArray}
                strokeLinecap="round" fill="none" cx={props.width / 2} cy={props.height / 2} r={props.radius}>
          <animate attributeType="CSS" attributeName="stroke-dasharray" from={`0, ${2 * Math.PI * props.radius}`}
                   to={props.strokeDashArray} dur="1s"/>
        </circle>
        <text x="50%" y="50%" textAnchor="middle" strokeWidth="2px" dy=".3em" fill={props.barColor}>{props.rating}</text>
      </svg>
    </div>
  )
};

Rating.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  barColor: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  strokeDashArray: PropTypes.string.isRequired,
  radius: PropTypes.number.isRequired,
  rating: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Rating;
