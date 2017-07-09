import React from 'react'
import Marked from 'react-markdown'
import Axios from 'axios'

import ExperienceView from '../view/experience-view'
import Title from '../view/container-title-view'
import Spacer from '../view/spacer-view'
import ContainerWrapper from '../view/container-wrapper-view'

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
            <ContainerWrapper>
                <Title>Experience</Title>
                <h4 className="wrapped-underlined">Current job</h4>
                <div className=" mdl-grid" style={{ justifyContent: 'center' }}>
                    <ExperienceView width={5} titleStyle={{ height: 140 }} background='/assets/gamblit.png' title="Gamblit Gaming" year={2016}>
                        <Marked source={this.state.gamblit_job_description} />
                    </ExperienceView>
                </div>
                <h4 className="wrapped-underlined">Previous jobs</h4>
                <div className=" mdl-grid" style={{ justifyContent: 'center' }}>
                    <ExperienceView titleStyle={{ height: 110 }} background='/assets/alfa.jpg' title="Alfa" year={2015}>
                        <Marked source={this.state.alfa_job_description} />
                    </ExperienceView>
                    <ExperienceView titleStyle={{ height: 180 }} background='/assets/mind_institute.jpg' title="MIND Institute" year={2014}>
                        <Marked source={this.state.ucdmc_job_description} />
                    </ExperienceView>
                </div>
            </ContainerWrapper>
        )
    }
}