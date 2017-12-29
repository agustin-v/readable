import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './actionBar.css'
import Actions from './Actions'

const ActionBar = ({label, action, back}) => {
    return(
        <div styleName='wrapper'>
            {back
                ?<div>
                    <span styleName ='actionable' className='lnr lnr-chevron-left'></span>
                </div>
                :<div></div>
            }
            <div styleName='label'>{label}</div>
            <div styleName=''>
                {Actions({action})}
            </div>
        </div>
        )
}



export default CSSModules(ActionBar, styles)