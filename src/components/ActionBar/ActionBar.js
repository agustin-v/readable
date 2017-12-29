import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './actionBar.css'

const ActionBar = ({label, action}) => {
    if (action === 'sort'){
        return(
            <div styleName='wrapper'>
                <div styleName='label'>{label}</div>
                <div styleName='actions-wrapper'>
                    <div>
                        <i className="lnr lnr-calendar-full"></i>
                        <span className="lnr lnr-chevron-down"></span>
                    </div>
                    <div>
                        <span class="lnr lnr-thumbs-up"></span>
                        <span className="lnr lnr-chevron-down"></span>
                    </div>
                </div>
            </div>
        )
    }
}

export default CSSModules(ActionBar, styles)