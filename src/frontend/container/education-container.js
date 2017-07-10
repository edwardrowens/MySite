import React from 'react'
import Markdown from 'react-markdown'
import Axios from 'axios'

import Title from '../view/container-title-view'
import ExperienceCard from '../view/experience-card-view'
import ContainerWrapper from '../view/container-wrapper-view'

export default class EducationContainer extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            ucla_description: ''
        }
    }

    componentWillMount() {
        Axios.get("/assets/docs/ucla.md").then(result => {
            this.setState({ ucla_description: result.data })
        })
    }

    render() {
        return (
            <ContainerWrapper>
                <Title>Education</Title>
                <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                    <ExperienceCard titleStyle={{ height: 140 }} year={2014} title='UCLA' background='/assets/ucla.jpg'>
                        <Markdown source={this.state.ucla_description} />
                    </ExperienceCard>
                </div >
            </ContainerWrapper>
        )
    }
}