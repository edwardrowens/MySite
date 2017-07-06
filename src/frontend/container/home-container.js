import React from 'react'
import Markdown from 'react-markdown'
import Axios from 'axios'

import LogoView from '../view/logo-view'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            intro: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        Axios.get("/assets/docs/intro.md").then((result) => {
            this.setState({ intro: result.data })
        })
    }

    render() {
        return (
            <div className="mdl-grid" >
                <div className="mdl-layout-spacer"></div>
                <div style={{ background: '#f0f0f5', padding: 10, borderRadius: 10 }} className="mdl-cell mdl-cell--12-col">
                    <h3 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)' }}>Hi there</h3>
                    <Markdown source={this.state.intro} />
                    <h3 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)' }}>Summary</h3>
                    <div className="mdl-grid mdl-cell mdl-cell--12-col">
                        <div className="mdl-cell mdl-cell--2-col">
                            <div>
                                <h5 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)', display: 'inline-block' }}>Name</h5>
                            </div>
                            <p>Edward Owens</p>
                        </div>
                        <div className="mdl-cell mdl-cell--2-col">
                            <div>
                                <h5 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)', display: 'inline-block' }}>Age</h5>
                            </div>
                            <p>25</p>
                        </div>
                        <div className="mdl-cell mdl-cell--2-col">
                            <div>
                                <h5 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)', display: 'inline-block' }}>Location</h5>
                            </div>
                            <p>Los Angeles</p>
                        </div>
                        <div className="mdl-cell mdl-cell--2-col">
                            <div>
                                <h5 style={{ borderBottom: '1px solid rgba(204, 153, 255, 1)', display: 'inline-block' }}>Occupation</h5>
                            </div>
                            <p>Software Engineer</p>
                        </div>
                    </div>
                </div>
                <div className="mdl-layout-spacer"></div>
            </div>
        )
    }
}