
import { useReducer } from 'react'
import './App.css'

function formReducer(state,action){
  switch(action.type){
    case 'EMAIL' : return {...state,email: action.payload}
    case 'PASSWORD' : return {...state,password: action.payload}
    case 'RESET' : return {}
    default : throw error('invalid action type')
  }
}

function App() {
  const [formdata,dispatch] = useReducer(formReducer,{email:'', password:''})
  return (<>
     <h1>useReducer Form</h1>
     <form>
            Email: <input onChange={(e)=>dispatch({type:'EMAIL',payload:e.target.value})} placeholder='type email here'/> <br/>
            Password: <input onChange={(e)=>dispatch({type:'PASSWORD',payload:e.target.value})} placeholder='type password here'/>
            <button onClick={()=>dispatch({type:'RESET'})}>Reset</button>
     </form>

    {formdata.email || formdata.password ?  (
               <div>
                   User Email : {formdata.email} <br/>
                   User Password : {formdata.password}
              </div>) :(<div>No Details Found</div>)
    }     
  
     
    </>
  )
}

export default App
