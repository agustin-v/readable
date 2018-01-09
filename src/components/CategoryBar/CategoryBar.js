import React from 'react'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import styles from './categoryBar.css'
import react from '../../assets/images/icon_react.svg'
import redux from '../../assets/images/icon_redux.svg'
import udacity from '../../assets/images/icon_udacity.svg'

const CategoryBar = () => {
    return(
        <div styleName='wrapper'>
            <ul>
                <li styleName='actionable'>
                    <Link to='/'>
                        <span className="lnr lnr-layers"></span>
                    </Link>
                </li>
                <li styleName='actionable'>
                    <Link to='/category/react'> 
                        <img src={react} alt='react-logo'/>
                    </Link>
                </li>
                <li styleName='actionable'>
                    <Link to='/category/redux'>
                        <img src={redux} alt='redux-logo'/>
                    </Link>
                </li>
                <li styleName='actionable'>
                    <Link to='/category/udacity'>
                        <img src={udacity} alt='udacity-logo'/>
                    </Link>
                </li>
            </ul>
            
            
        </div>

    )
}

export default CSSModules(CategoryBar, styles)