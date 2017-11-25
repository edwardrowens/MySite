import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import ReactMarkdown from 'react-markdown';

class Markdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: '',
    }
  }

  componentWillMount() {
    Axios.get(this.props.uri).then((result) => {
      this.setState({loaded: result.data});
    });
  }

  render() {
    return (
      <ReactMarkdown
        source={this.state.loaded}
      />
    );
  }
}

Markdown.propTypes = {
  uri: PropTypes.string.isRequired,
};

export default Markdown;
