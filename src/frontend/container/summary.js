import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import SummaryComponent from '../component/summary';

class Summary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeIn: false,
    }
  }

  @autobind
  onEnter(isVisible) {
    if (isVisible) {
      this.setState({fadeIn: true});
    }
  }

  render() {
    return (
      <SummaryComponent {...this.props} fadeIn={this.state.fadeIn} onEnter={this.onEnter}/>
    )
  }
}

Summary.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Summary;
