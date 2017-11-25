import React, {Component} from 'react';
import PropTypes from 'prop-types';
import autobind from 'autobind-decorator';

import ItemComponent from '../component/item';

class Item extends Component {
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
      <ItemComponent {...this.props} fadeIn={this.state.fadeIn} onEnter={this.onEnter}/>
    )
  }
}

Item.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default Item;
