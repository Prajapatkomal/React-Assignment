import {add,sub} from './actionType'

export const CountReducer = (state=0,action)=>{
    switch(action.type){
        case add : return state+1
        case sub : return state-1
        default: return state

    }

}