import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function currentPostReducer( state = initialState.currentPost, action) {
    switch (action.type) {
        case types.SET_CURRENT_POST:
            console.log('\n SET_CURRENT_POST')
            return {
                ...state,
                post: action.currentPost
            }

        case types.SET_CURRENT_COMMENTS:
            console.log('\n SET_CURRENT_COMMENTS')
            return {
                ...state,
                comments: action.comments
            }

        default:
            return state;
    }
}