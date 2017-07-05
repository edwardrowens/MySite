import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import BodyContainer from './container/body-container'
import SlickCarousel from './container/slick-carousel'
import NavBarContainer from './container/nav-bar-container'

// style={{ position: 'absolute', top: 0, bottom: 0, right: 0, left: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '1px solid black' }}

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