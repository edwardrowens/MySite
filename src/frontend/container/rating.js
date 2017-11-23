import React, {Component} from 'react';
import PropTypes from 'prop-types';
import tinygradient from 'tinygradient';

import RatingComponent from '../component/rating';

class Rating extends Component {
  componentWillMount() {
    let gradientFactory = tinygradient([
      {color: '#e51c23', pos: 0},
      {color: '#3fb0ac', pos: 1}
    ]);
    this.gradient = gradientFactory.hsv(10);
  }

  render() {
    let radius = 50;
    let circumference = 2 * Math.PI * radius;
    let strokeLength = (circumference / 100) * this.props.rating;
    let barColorIndex = Math.floor(this.props.rating / 10) - 1;
    return (
      <RatingComponent
        width={120}
        height={120}
        barColor={this.gradient[barColorIndex].toHexString()}
        backgroundColor='#efefef'
        strokeDashArray={`${strokeLength}, ${circumference}`}
        radius={radius}
        rating={`${this.props.rating }%`}
        className={this.props.className}
      />
    )
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Rating;
