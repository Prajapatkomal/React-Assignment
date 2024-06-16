import {applyMiddleware, combineReducers, legacy_createStore} from 'redux'
import { reducer } from './reducer'
import {thunk} from 'redux-thunk'
import logger from 'redux-logger'




const rootReducer = combineReducers({
    data : reducer
})



const middleware = applyMiddleware(thunk,logger)

export const store =  legacy_createStore(rootReducer, middleware)