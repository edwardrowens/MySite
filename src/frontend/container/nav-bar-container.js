import React from 'react'

import NavLinkView from '../view/nav-link-view'

export default (props) => {
    return (
        <div>
            <NavLinkView to='/'>Home</NavLinkView>
            <NavLinkView to='/about'>about</NavLinkView>
            <NavLinkView to='/education'>education</NavLinkView>
            <NavLinkView to='/experience'>experience</NavLinkView>
            <NavLinkView to='/skills'>skills</NavLinkView>
            <NavLinkView to='/contact'>contact</NavLinkView>
        </div>
    )
}