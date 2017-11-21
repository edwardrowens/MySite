import React, {Component} from 'react';
import scrollToElement from 'scroll-to-element';

import ExperienceComponent from '../component/experience';

class ExperienceContainer extends Component {

  onVisibilityChange(isVisible) {
    if (isVisible) {
      scrollToElement('#experience', {
        duration: 500,
        ease: 'linear',
      });
    }
  }

  render() {
    return (
      <ExperienceComponent id='experience' onVisibilityChange={this.onVisibilityChange}/>
    )
  }
}

export default ExperienceContainer;
