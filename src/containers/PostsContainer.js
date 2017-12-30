import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/modules/postsContainer.css'

import Preview from '../components/Preview/Preview'


class PostsContainer extends Component {
    render(){
        return(
            <div styleName='wrapper'>
                {Preview()}
                {Preview()}
                {Preview()}
                {Preview()}
                {Preview()}
            </div>
        )
    }
}

export default CSSModules(PostsContainer, styles)