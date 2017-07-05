import React from 'react'
import Transition from 'react-inline-transition-group'

export default (props) => {

    let handlePhaseEnd = (phase, id) => {
    }

    let handlePhaseStart = (phase, id) => {
    }
    let animateFromRight = {
        base: {
            transform: 'translate(150%, -50%)',
            position: 'absolute',
            margin: 'auto',
            left: '50%',
            top: '50%'
        },

        enter: {
            transform: 'translate(-50%, -50%)',
            transition: 'transform 500ms ease-in-out',
            position: 'absolute',
            left: '50%',
            top: '50%'
        },

        leave: {
            transform: 'translate(-250%, -50%)',
            transition: 'transform 500ms ease-in-out',
            position: 'absolute',
            margin: 'auto',
            left: '50%',
            top: '50%'
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