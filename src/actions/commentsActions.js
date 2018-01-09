import * as types from './actionTypes'
import API from '../api/comments'

export function getCurrentPostComments(id) {
    return (dispatch) => {
        return API.getCurrentComments(id).then( comments => {
            dispatch(setCurrentComments(comments))
        }).catch( err => {
            throw err;
        })
    }
}

export function setCurrentComments(comments) {
    return {type: types.SET_CURRENT_COMMENTS, comments}
}