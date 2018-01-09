import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './actionBar.css'
import Actions from './Actions'

const ActionBar = ({label, action, back, votes, time}) => {

    const goBack = () => {
        window.history.back();
    }

    return(
        <div styleName='wrapper'>
            {back
                ?<div onClick={goBack}>
                    <span styleName ='actionable' className='lnr lnr-chevron-left'></span>
                </div>
                :<div></div>
            }
            <div styleName='label'>{label}</div>
            <div styleName=''>
                {Actions({action, votes, time})}
            </div>
        </div>
    )
}



export default CSSModules(ActionBar, styles)