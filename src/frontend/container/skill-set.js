import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import SkillSetComponent from '../component/skill-set';

class SkillSet extends Component {
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
      <SkillSetComponent title={this.props.title} fadeIn={this.state.fadeIn} onEnter={this.onEnter}>
        {this.props.children}
      </SkillSetComponent>
    )
  }
}

SkillSet.propTypes = {
  title: PropTypes.string.isRequired,
};

export default SkillSet;
