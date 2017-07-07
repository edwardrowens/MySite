import React from 'react'
import Markdown from 'react-markdown'
import Axios from 'axios'

import LogoView from '../view/logo-view'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutme: '',
            thissite: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        Axios.get("/assets/docs/aboutme.md").then((result) => {
            this.setState({ aboutme: result.data })
        })
        Axios.get("/assets/docs/thissite.md").then((result) => {
            this.setState({ thissite: result.data })
        })
    }

    render() {
        return (
            <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell-middle" >
                    <LogoView style={{ width: '30%', borderRadius: 100, border: '3px solid rgba(204, 153, 255, 1)', display: 'block', margin: 'auto' }} />
                </div>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--12-col mdl-grid" style={{ justifyContent: 'center' }}>
                    <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp" style={{ padding: 15 }} >
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">About me</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <Markdown source={this.state.aboutme} />
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--6-col mdl-card mdl-shadow--4dp" style={{ padding: 15 }}>
                        <div class="mdl-card__title">
                            <h2 class="mdl-card__title-text">This site</h2>
                        </div>
                        <div class="mdl-card__supporting-text">
                            <Markdown source={this.state.thissite} />
                        </div>
                    </div>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#42ebf4' }}>Age</span>
                        <span className="mdl-chip__text">25</span>
                    </span>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#f441f4' }}>Name</span>
                        <span className="mdl-chip__text">Edward Owens</span>
                    </span>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#4ff441' }}>Area</span>
                        <span className="mdl-chip__text">Los Angeles</span>
                    </span>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#f44141' }}>Job</span>
                        <span className="mdl-chip__text">Software Engineer</span>
                    </span>
                </div>
            </div >
        )
    }
}