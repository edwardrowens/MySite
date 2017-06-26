import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

class Application extends React.Component {
    render() {
        return (
            <Router>
                <div className="mdl-layout mdl-js-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header">
                    <main className="mdl-layout__content" >
                        <div>hi</div>
                    </main>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Application />, document.getElementById('app'))