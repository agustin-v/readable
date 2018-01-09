import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import styles from '../styles/modules/homeContainer.css'
import * as SortingActions from '../actions/sortingActions'
import * as PostsActions from '../actions/postsActions'
import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'
import Categorybar from '../components/CategoryBar/CategoryBar'
import PostsContainer from './PostsContainer'

class CategoryContainer extends Component {

    render(){
        const { posts, votes, time } = this.props;
        let filterPosts = posts.filter(post => post.category === this.props.match.params.category)
        return(
            <div>
                <div>
                    {Navbar()}
                    {ActionBar({ label: this.props.match.params.category, action:'sort', back: true, votes, time })}
                </div>
                <div styleName='main'>
                    {Categorybar()}
                    <PostsContainer posts={filterPosts}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
        votes: state.sorting.votes,
        time: state.sorting.time,
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ ...PostsActions, ...SortingActions }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(CategoryContainer, styles))