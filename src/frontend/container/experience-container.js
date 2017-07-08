import React from 'react'
import Marked from 'react-markdown'
import Axios from 'axios'

import ExperienceView from '../view/experience-view'

export default class ExperienceContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gamblit_job_description: '',
            alfa_job_description: '',
            ucdmc_job_description: ''
        }

        this.componentDidMount = this.componentDidMount.bind(this)
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        Axios.get("/assets/docs/gamblit_job_description.md").then((result) => {
            this.setState({ gamblit_job_description: result.data })
        })
        Axios.get("/assets/docs/alfa_job_description.md").then((result) => {
            this.setState({ alfa_job_description: result.data })
        })
        Axios.get("/assets/docs/ucdmc_job_description.md").then((result) => {
            this.setState({ ucdmc_job_description: result.data })
        })
    }

    render() {
        return (
            <div className="mdl-grid" style={{ justifyContent: 'center', marginBottom: 30 }}>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell--middle">
                    <h1 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block', margin: 'auto', textAlign: 'center', marginBottom: 50 }}>Experience</h1>
                </div>
                <div className="mdl-layout-spacer"></div>
                <div className="mdl-cell mdl-cell--12-col mdl-grid" style={{ justifyContent: 'center' }}>
                    <div className="mdl-cell mdl-cell--12-col" style={{ justifyContent: 'center' }}>
                        <h4 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)' }}>Current job</h4>
                        <div className="mdl-cell mdl-cell--12-col mdl-grid" style={{ justifyContent: 'center' }}>
                            <ExperienceView width={5} titleStyle={{ height: 140, background: 'url(\'/assets/gamblit.png\') center / cover', padding: 0 }} title="Gamblit Gaming" year={2016}>
                                <Marked source={this.state.gamblit_job_description} />
                            </ExperienceView>
                        </div>
                    </div>
                    <div className="mdl-cell mdl-cell--12-col" style={{ justifyContent: 'center' }}>
                        <h4 style={{ borderBottom: '3px solid rgba(204, 153, 255, .75)', display: 'block' }}>Previous jobs</h4>
                        <div className="mdl-cell mdl-cell--12-col mdl-grid" style={{ justifyContent: 'center' }}>
                            <ExperienceView titleStyle={{ height: 110, background: 'url(\'/assets/alfa.jpg\')  center / cover', padding: 0 }} title="Alfa" year={2015}>
                                <Marked source={this.state.alfa_job_description} />
                            </ExperienceView>
                            <ExperienceView titleStyle={{ height: 180, background: 'url(\'/assets/mind_institute.jpg\')  center / cover', padding: 0 }} title="MIND Institute" year={2014}>
                                <Marked source={this.state.ucdmc_job_description} />
                            </ExperienceView>
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}