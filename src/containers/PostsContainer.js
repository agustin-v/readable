import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/modules/postsContainer.css'

import Preview from '../components/Preview/Preview'


class PostsContainer extends Component {
    render(){
        return(
            <div styleName='wrapper'>
                {
                    this.props.posts.map( (post) => {
                        return <Preview key={post.id}
                           author={post.author}
                           title={post.title}
                           id={post.id}
                           commentCount={post.commentCount}
                           voteScore={post.voteScore}
                           timestamp={post.timestamp}
                        />
                    })
                }
            </div>
        )
    }
}

export default CSSModules(PostsContainer, styles)