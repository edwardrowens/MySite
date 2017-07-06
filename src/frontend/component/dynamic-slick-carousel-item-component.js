import React from 'react'

import SlickCarouselItem from '../view/slick-carousel-item-view'

export default class DynamicSlickCarouselItemComponent extends React.Component {
    constructor(props) {
        super(props)

        this.config = {
            widthPercentage: .2,
            heightPercentage: .2
        }

        this.state = {
            width: '0',
            height: '0',
        };
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    render() {
        return (
            <SlickCarouselItem style={{width: this.state.width * this.config.widthPercentage, height:this.state.height * this.config.heightPercentage}}/>
        )
    }
}