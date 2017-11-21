import React, {Component} from 'react';
import scrollToElement from 'scroll-to-element';

import AboutComponent from '../component/about';

class AboutContainer extends Component {

  onVisibilityChange(isVisible) {
    if (isVisible) {
      scrollToElement('#about', {
        duration: 500,
        ease: 'linear',
      });
    }
  }

  render() {
    return (
      <AboutComponent id='about' onVisibilityChange={this.onVisibilityChange}/>
    )
  }
}

export default AboutContainer;
