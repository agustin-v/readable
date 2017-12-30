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

export function setPosts(posts) {
    return {type: types.SET_POSTS, posts}
}