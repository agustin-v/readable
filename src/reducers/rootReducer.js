import { combineReducers } from 'redux'

import posts from './postsReducer'
import sorting from './sortingReducer'

const rootReducer = combineReducers({
    posts,
    sorting
})

export default rootReducer;