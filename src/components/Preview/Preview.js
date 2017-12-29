import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './preview.css'

const Preview = () => {
    return(
        <div styleName='wrapper'>
            <div styleName='title'>
                Just kidding. It takes more than 10 minutes to learn technology.
            </div>
            <div styleName='author'>
                jane doe
            </div>
            <div styleName='info-wrapper'>
                <div styleName='info-left'>
                    <div styleName='info-first'>
                        <span styleName='info-icon' className="lnr lnr-thumbs-up"></span>
                        <span styleName='info-text'>20</span>
                    </div>
                    <div>
                        <span styleName='info-icon' className="lnr lnr-bubble"></span>
                        <span styleName='info-text'>9</span>
                    </div>
                </div>
                <div styleName='info-right'>
                    <span styleName='info-icon' className="lnr lnr-calendar-full"></span>
                    <span styleName='info-text'>20/07/18</span>
                </div>
            </div>
        </div>
    )
}

export default CSSModules(Preview, styles)