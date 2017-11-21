import React, {Component} from 'react';
import scrollToElement from 'scroll-to-element';

import ContactComponent from '../component/contact';

class ContactContainer extends Component {

  onVisibilityChange(isVisible) {
    if (isVisible) {
      scrollToElement('#contact', {
        duration: 500,
        ease: 'linear',
      });
    }
  }

  render() {
    return (
      <ContactComponent id='contact' onVisibilityChange={this.onVisibilityChange}/>
    )
  }
}

export default ContactContainer;
