import React from 'react'

import Markdown from 'react-markdown'
import Axios from 'axios'

export default class AboutMeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            aboutme: '',
            thissite: '',
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
            <div className="mdl-grid" style={{ justifyContent: 'center', marginBottom: 30 }}>
                <div className="mdl-cell-middle">
                    <h1 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block', margin: 'auto', textAlign: 'center', marginBottom: 50 }}>About me</h1>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#f441f4' }}>Name</span>
                        <span className="mdl-chip__text">Edward Owens</span>
                    </span>
                    <span className="mdl-chip mdl-chip--contact" style={{ marginRight: 15 }}>
                        <span className="mdl-chip__contact mdl-color-text--white" style={{ backgroundColor: '#42ebf4' }}>Age</span>
                        <span className="mdl-chip__text">25</span>
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
                <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                    <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp" style={{ backgroundColor: '#f2f2f2' }}>
                        <div className="mdl-card__title" style={{ borderBottom: '1px solid rgba(204, 153, 255, .75)', backgroundColor: '#42ebf4' }}>
                            <h2 className="mdl-card__title-text">About me</h2>
                        </div>
                        <div className="mdl-card__supporting-text">
                            <Markdown source={this.state.aboutme} />
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--4-col mdl-card mdl-shadow--4dp" style={{ backgroundColor: '#f2f2f2' }}>
                        <div className="mdl-card__title" style={{ borderBottom: '1px solid rgba(204, 153, 255, .75)', backgroundColor: '#42ebf4' }}>
                            <h2 className="mdl-card__title-text">This site</h2>
                        </div>
                        <div className="mdl-card__supporting-text" >
                            <Markdown source={this.state.thissite} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}