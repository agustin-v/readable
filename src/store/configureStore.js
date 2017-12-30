import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import thunk from 'redux-thunk'
import history from '../store/configureHistory'
import {routerMiddleware} from 'react-router-redux'

const middleware = routerMiddleware(history);

export default function configureStore() {
    return createStore(
        rootReducer,
        applyMiddleware(thunk, middleware)
    )
}