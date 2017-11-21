import React, {Component} from 'react';
import scrollToElement from 'scroll-to-element';

import IntroComponent from '../component/intro';

class IntroContainer extends Component {

  onVisibilityChange(isVisible) {
    if (isVisible) {
      scrollToElement('#intro', {
        duration: 500,
        ease: 'linear',
      });
    }
  }

  render() {
    return (
      <IntroComponent id='intro' onVisibilityChange={this.onVisibilityChange}/>
    )
  }
}

export default IntroContainer;
