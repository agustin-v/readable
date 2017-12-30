import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function postsReducer( state = initialState.posts, action) {
    switch (action.type) {
        case types.SET_POSTS:
            console.log('\n SET_POSTS')
            return action.posts
        default:
            return state;
    }
}