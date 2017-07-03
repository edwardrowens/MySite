import React from 'react'
import MediaQuery from 'react-responsive'

import TitledCardView from './titled-card-view'

export default (props) => {
    return (
        <MediaQuery minDeviceWidth={1025}>
            {
                (matches) => {
                    if (matches) {
                        return (
                            <TitledCardView key={props.key} style={props.style} contentStyle={props.contentStyle} title={props.title}>
                                {props.children}
                            </TitledCardView>
                        )
                    } else {
                        return (
                            < TitledCardView key={props.key} style={props.smallScreenStyle} contentStyle={props.contentStyle} title={props.title}>
                                {props.children}
                            </TitledCardView>
                        )
                    }

                }
            }
        </MediaQuery>
    )
}