import React from 'react'
import UUID from 'uuid/v4'

import Spacer from './spacer-view'

export default (props) => {
    let rating = []
    for (let i = 0; i < props.rating; ++i) {
        rating.push(<i style={{ display: 'inline-block', color: '#cc99ff', fontSize: '1.5em' }} key={UUID()} className="material-icons md-dark md-inactive">star</i>)
    }

    return (
        <li className="mdl-list__item" style={{ padding: 0 }}>
            <span className="mdl-list__item-primary-content">
                <span style={{ display: 'inline-block', maxWidth: 110, color: '#1ec503', fontSize: '1em' }}>{props.name}</span>
                <Spacer style={{ display: 'inline-block' }} />
                <span className="mdl-cell--middle" style={{ display: 'inline-block', minWidth: 120 }}>
                    {rating}
                </span>
            </span>
        </li>
    )
}