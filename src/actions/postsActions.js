import * as types from './actionTypes'
import API from '../api/posts'

export function getAllPosts() {
    return (dispatch) => {
        return API.getAll().then( posts => {
            dispatch(setPosts(posts))
        }).catch(err => {
            throw err;
        })
    }
}

export function getCurrentPost(id) {
    return (dispatch) => {
        return API.getOne(id).then( post => {
            dispatch(setCurrentPost(post))
        }).catch( err => {
            throw err;
        })
    }
}

export function setPosts(posts) {
    return {type: types.SET_POSTS, posts}
}

export function setCurrentPost(currentPost) {
    return{type: types.SET_CURRENT_POST, currentPost}
}