import React from 'react'
import CSSModules from 'react-css-modules'
import styles from './post.css'

const Post = ({currentPost}) => {
    if(currentPost !== undefined){
        return(
            <div styleName='wrapper'>
                <div>
                    {currentPost.title}
                </div>
                <div>
                    {currentPost.author}
                </div>
                <div>
                    {currentPost.body}
                </div>
            </div>
        )
    }
    
}

export default CSSModules(Post, styles)