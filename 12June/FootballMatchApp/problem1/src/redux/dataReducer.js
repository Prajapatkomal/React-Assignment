

const initialVal = {
   isLoading: false,
   isError: false,
   data :[]
}

export const dataReducer =(state=initialVal, action)=>{
  switch(action.type){
    case 'LOADING' : return {...state, isloading:true} 
    case 'ERROR' : return {...state, isloading:false, isError:true}
    case 'SUCCESS' : return {...state,isloading:false, isError:false, data: action.payload}
    case 'SEARCHTEAM1' :   return {
      ...state,
      data: state.data.filter(el => el.team1.toLowerCase().includes(action.payload.toLowerCase()))
  };
  case 'SEARCHTEAM2' :   return {...state,
    data: state.data.filter(el => el.team2.toLowerCase().includes(action.payload.toLowerCase()))
};
 case 'TOGGLEFAVOURITE' :   return {...state,
  data: state.data.map((match,index) => { return index ===action.payload ? {...match, favourite : !match.favourite}: match}) };

    default : return state
  }
}