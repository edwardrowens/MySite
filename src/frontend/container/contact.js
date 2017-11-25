import React, {Component} from 'react';
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
  onEnter() {
    setTimeout(() => this.setState({animate: true}), 1000);
  }

  render() {
    return (
      <ContactComponent onEnter={this.onEnter} animate={this.state.animate}/>
    )
  }
}

export default ContactContainer;
