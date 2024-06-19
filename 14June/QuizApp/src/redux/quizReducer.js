

const initialVal = {
    isLoading :false,
    isError: false,
    data :[]
}


export const quizReducer=(state=initialVal,action)=>{

switch(action.type){
    case 'LOADING' :return {...state, isLoading: true}
    case 'ERROR' : return {...state,isLoading: false, isError: true}
    case 'SUCCESS' : return  {...state,isLoading: false, isError: false, data: action.payload}
    default : return state
}
}


