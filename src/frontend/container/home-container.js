import React from 'react'
import Markdown from 'react-markdown'
import Axios from 'axios'

import LogoView from '../view/logo-view'

export default class HomeContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: ''
        }
        this.componentDidMount = this.componentDidMount.bind(this)
        this.setState = this.setState.bind(this)
    }

    componentDidMount() {
        Axios.get("/assets/docs/intro.md").then((result) => {
            this.setState({ contents: result.data })
        })
    }

    render() {
        return (
            <Markdown source={this.state.contents} />
        )
    }
}