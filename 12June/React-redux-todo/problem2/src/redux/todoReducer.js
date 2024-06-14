


export const todoReducer = (state=[],action)=>{
 switch(action.type){
   case 'ADDTODO' : return [...state,{id:action.id,title:action.title,status : action.status}]
   case 'UPDATETODO' : return state.map(todo => 
                todo.id === action.id ? { ...todo, status: !todo.status } : todo
              );
  case 'DELETE' : return state.filter(todo=> todo.id !== action.id)
   default : return state
 }
}