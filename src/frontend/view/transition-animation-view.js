import React from 'react'
import Transition from 'react-inline-transition-group'

export default (props) => {

    let handlePhaseEnd = (phase, id) => {
    }

    let handlePhaseStart = (phase, id) => {
    }
    let animateFromRight = {
        base: {
            transform: 'translate(200%)',
            display: 'inline-block'
        },

        enter: {
            transform: 'translate(0%)',
            transition: 'transform 500ms ease-in-out',
            display: 'inline-block'
        },

        leave: {
            transform: 'translate(-200%)',
            transition: 'transform 500ms ease-in-out',
            display: 'inline-block'
        }
    }

    let animateFromLeft = {
        base: {
            transform: 'translate(-200%)',
            display: 'inline-block'
        },

        enter: animateFromRight.enter,

        leave: animateFromRight.leave
    }

    let animation = props.animateFromRight ? animateFromRight : animateFromLeft

    return (
        <Transition className={props.className} childrenStyles={{ enter: animation.enter, leave: animation.leave, base: animation.base, appear: animation.enter }} onPhaseEnd={handlePhaseEnd} onPhaseStart={handlePhaseStart} style={props.style}>
            {props.children}
        </Transition>
    )
}