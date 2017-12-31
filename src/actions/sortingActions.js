import * as types from './actionTypes'

export function setTimeSorting(time) {
    return {
        type: types.SET_TIME_SORTING, time
    }
}

export function setVotesSorting(votes) {
    return {
        type: types.SET_VOTES_SORTING, votes
    }
}