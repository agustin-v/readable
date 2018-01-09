import React from 'react'
import CSSModules from 'react-css-modules'
import moment from 'moment'
import styles from './comment.css'

const Comment = ({id, author, timestamp, body, voteScore}) => {
    return(
        <div styleName='wrapper'>
            <div styleName='header'>
                <div styleName='info'>
                    <div styleName='author'>
                        {author}
                    </div>
                    <div>
                        <span className="lnr lnr-calendar-full"></span>
                        <span styleName='date'>{moment(timestamp).format('DD/MM/YY')}</span>
                    </div>
                </div>
                <div styleName='actions'>
                    <span styleName='actions-space actionable' className="lnr lnr-pencil"></span>
                    <span styleName='actionable' className="lnr lnr-cross"></span>
                </div>
            </div>
            <div styleName='comment'>
                {body}
            </div>
        </div>
    )
}

export default CSSModules(Comment, styles, {allowMultiple: true})