import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/modules/homeContainer.css'

import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'
import Categorybar from '../components/CategoryBar/CategoryBar'
import PostsContainer from './PostsContainer'


class HomeContainer extends Component {
    render() {
        return(
            <div>
                <div>
                    {Navbar()}
                    {ActionBar({ label: 'home', action:'sort', back: false })}
                </div>
                <div styleName='main'>
                    {Categorybar()}
                    <PostsContainer/>
                </div>
            </div>
        )
    }
}

export default CSSModules(HomeContainer, styles)