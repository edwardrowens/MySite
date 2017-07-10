import React from 'react'
import Markdown from 'react-markdown'
import Axios from 'axios'

import Title from '../view/container-title-view'
import Chip from '../view/chip-view'
import ContainerWrapper from '../view/container-wrapper-view'

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
            <ContainerWrapper>
                <Title>About me</Title>
                <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                    <Chip contactColor='#f441f4' contactText='Name'>Edward Owens</Chip>
                    <Chip contactColor='#42ebf4' contactText='Age'>25</Chip>
                    <Chip contactColor='#4ff441' contactText='Area'>Los Angeles</Chip>
                    <Chip contactColor='#f44141' contactText='Job'>Software Engineer</Chip>
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
            </ContainerWrapper >
        )
    }
}