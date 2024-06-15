
import { combineReducers, legacy_createStore } from "redux";
import { dataReducer } from "./dataReducer";



const rootReducer = combineReducers({
    data : dataReducer
})

export const store = legacy_createStore(rootReducer)
