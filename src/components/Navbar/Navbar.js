import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './navbar.css'

const Navbar = () => {
    return (
        <nav styleName='navbar'>
            <div styleName='text'>readable</div>
        </nav>
    )
}

export default CSSModules(Navbar, styles)