import initialState from './initialState'
import * as types from '../actions/actionTypes'

export default function postsReducer( state = initialState.posts, action) {
    switch (action.type) {
        case types.SET_VOTES_SORTING:
            console.log('\n SET_VOTES_SORTING')
            return {
                ...state,
                time: action.votes
            }

        case types.SET_TIME_SORTING:
            console.log('\n SET_TIME_SORTING')
            return {
                ...state,
                time: action.time
            }
            
        default:
            return state;
    }
}