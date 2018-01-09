import React from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import styles from './preview.css'
import moment from 'moment'

const Preview = ({title, author, id, commentCount, voteScore, timestamp }) => {
    return(
        <div styleName='wrapper'>
            <Link to={`/post/${id}`}>
                <div styleName='title'>
                    {title}
                </div>
            </Link>
            <div styleName='author'>
                {author}
            </div>
            <div styleName='info-wrapper'>
                <div styleName='info-left'>
                    <div styleName='info-first'>
                        <span styleName='info-icon' className="lnr lnr-thumbs-up"></span>
                        <span styleName='info-text'>{voteScore}</span>
                    </div>
                    <div>
                        <span styleName='info-icon' className="lnr lnr-bubble"></span>
                        <span styleName='info-text'>{commentCount}</span>
                    </div>
                </div>
                <div styleName='info-right'>
                    <span styleName='info-icon' className="lnr lnr-calendar-full"></span>
                    <span styleName='info-text'>{moment(timestamp).format('DD/MM/YY')}</span>
                </div>
            </div>
        </div>
    )
}

export default CSSModules(Preview, styles)