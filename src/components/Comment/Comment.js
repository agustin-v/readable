import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './comment.css'

const Comment = () => {
    return(
        <div styleName='wrapper'>
            <div styleName='header'>
                <div styleName='info'>
                    <div styleName='author'>
                        Jane Doe
                    </div>
                    <div>
                        <span className="lnr lnr-calendar-full"></span>
                        <span styleName='date'>20/07/18</span>
                    </div>
                </div>
                <div styleName='actions'>
                    <span styleName='actions-space actionable' className="lnr lnr-pencil"></span>
                    <span styleName='actionable' className="lnr lnr-cross"></span>
                </div>
            </div>
            <div styleName='comment'>
                
            </div>
        </div>
    )
}

export default CSSModules(Comment, styles, {allowMultiple: true})