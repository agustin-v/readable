import { combineReducers } from 'redux'

import posts from './postsReducer'
import sorting from './sortingReducer'
import currentPost from './currentPostReducer.js'

const rootReducer = combineReducers({
    posts,
    sorting,
    currentPost,
})

export default rootReducer;