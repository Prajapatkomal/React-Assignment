import { fetchDataError, fetchDataLoading, fetchDataSuccess,sortDataDesc, sortDataAsc } from "./actionType";

const defaultVal = {
    isLoading :false,
    isError : false,
    data : []
    
}

export const reducer =(state = defaultVal,action)=>{

    switch(action.type){
      case fetchDataLoading : return  {...state,isLoading : true, isError:false}
      case fetchDataError: return  {...state,isLoading : false,isError:true}
      case fetchDataSuccess : return  {...state,isLoading : false,isError: false, data: action.payload}
      case sortDataAsc: return {...state, data: state.data.sort((a,b)=>{
                   return a.price-b.price
      })}
      case sortDataDesc: return {...state, data: state.data.sort((a,b)=>{
        return b.price-a.price
})}
      default : return state
    }
}

