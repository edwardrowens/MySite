import React, {Component} from 'react';
import autobind from 'autobind-decorator';

import IntroComponent from '../component/intro';

class IntroContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    }
  }

  @autobind
  onEnter() {
    setTimeout(()=>this.setState({animate: true}), 500);
  }

  render() {
    return (
      <IntroComponent onEnter={this.onEnter} animate={this.state.animate}/>
    )
  }
}

export default IntroContainer;
