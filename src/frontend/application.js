import React from 'react'
import ReactDOM from 'react-dom'

import App from './container/app';

class Application extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

ReactDOM.render(<Application/>, document.getElementById('root'))