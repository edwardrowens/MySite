import React from 'react'

import ContainerWrapper from '../view/container-wrapper-view'
import ContactIcon from '../view/contact-icon-view'
import Title from '../view/container-title-view'

export default (props) => {
    return (
        <ContainerWrapper>
            <Title>Contact</Title>
            <div className="mdl-grid" style={{ justifyContent: 'center' }}>
                <ContactIcon href="mailto:edwardrowens@gmail.com" src="/assets/email.png" />
                <ContactIcon href="https://www.linkedin.com/in/edward-owens-9a36aaaa/" src="/assets/linkedin.png" target="blank" />
                <ContactIcon href="https://github.com/edwardrowens" src="/assets/github.png" target="blank" />
            </div>
        </ContainerWrapper>
    )
}