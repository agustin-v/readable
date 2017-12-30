import React, {Component} from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/modules/homeContainer.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as PostsActions from '../actions/postsActions'
import Navbar from '../components/Navbar/Navbar'
import ActionBar from '../components/ActionBar/ActionBar'
import Categorybar from '../components/CategoryBar/CategoryBar'
import PostsContainer from './PostsContainer'


class HomeContainer extends Component {

    componentDidMount() {
        this.props.actions.getAllPosts()
    }

    render() {

        const { posts } = this.props;
        return(
            <div>
                <div>
                    {Navbar()}
                    {ActionBar({ label: 'home', action:'sort', back: false })}
                </div>
                <div styleName='main'>
                    {Categorybar()}
                    <PostsContainer posts={posts}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

function  mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...PostsActions}, dispatch)
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(HomeContainer, styles))