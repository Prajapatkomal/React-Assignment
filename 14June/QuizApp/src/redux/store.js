import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { quizReducer } from "./quizReducer";
import { thunk } from "redux-thunk";
import { loginReducer } from "./loginReducer";


const rootReducer = combineReducers({
    login : loginReducer,
    quiz : quizReducer

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))