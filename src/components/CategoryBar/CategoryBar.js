import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './categoryBar.css'
import react from '../../assets/images/icon_react.svg'
import redux from '../../assets/images/icon_redux.svg'
import udacity from '../../assets/images/icon_udacity.svg'

const CategoryBar = () => {
    return(
        <div styleName='wrapper'>
            <ul>
                <li>
                    <span className="lnr lnr-layers"></span>
                </li>
                <li styleName='actionable'>
                    <img src={react}/>
                </li>
                <li styleName='actionable'>
                    <img src={redux}/>
                </li>
                <li styleName='actionable'>
                    <img src={udacity}/>
                </li>
            </ul>
            
            
        </div>

    )
}

export default CSSModules(CategoryBar, styles)