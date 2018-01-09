import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/modules/homeContainer.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {getCurrentPost} from '../actions/postsActions'
import {getCurrentPostComments} from '../actions/commentsActions'
import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'
import Post from '../components/Post/Post'
import CommentsContainer from './CommentsContainer'

class PostContainer extends Component {
    
    componentDidMount() {
        this.props.actions.getCurrentPost(this.props.match.params.id)
        this.props.actions.getCurrentPostComments(this.props.match.params.id)
    }

    render(){
        const { currentPost, comments} = this.props;
        return(
            <div>
                {Navbar()}
                {ActionBar({ label: '', action:'post', back: true })}
                <div>
                    {Post({currentPost})}
                    {CommentsContainer({comments})}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPost: state.currentPost.post,
        comments: state.currentPost.comments
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ getCurrentPost, getCurrentPostComments }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(PostContainer, styles))