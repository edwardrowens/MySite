import React, {Component} from 'react';
import scrollToElement from 'scroll-to-element';
import autobind from 'autobind-decorator';

import ContactComponent from '../component/contact';

class ContactContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    }
  }

  @autobind
  onVisibilityChange(isVisible) {
    if (isVisible) {
      scrollToElement('#contact', {
        duration: 500,
        ease: 'linear',
      });
      setTimeout(() => this.setState({animate: true}), 1000);
    }
  }

  render() {
    return (
      <ContactComponent id='contact' onVisibilityChange={this.onVisibilityChange} animate={this.state.animate}/>
    )
  }
}

export default ContactContainer;
