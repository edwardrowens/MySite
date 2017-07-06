import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import SlickCarousel from './container/slick-carousel'

class Application extends React.Component {
    render() {
        return (
            <div className="mdl-layout mdl-js-layout" >
                <div className="mdl-layout-spacer" ></div>
                <div>
                    <SlickCarousel />
                </div>
                <div className="mdl-layout-spacer" ></div>
            </div>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('app'))