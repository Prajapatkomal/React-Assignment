import { createContext , useState} from "react";
export const TodoContext = createContext();

export const TodoContextProvider = ({children})=>{

const [todo,setTodo] =useState([])
const [newTodo, setNewTodo] = useState({
    task : "",
    status : false,
    assignee : ""
})

    return <>
           <TodoContext.Provider value={{todo,setTodo,newTodo,setNewTodo}}>
              {children}
           </TodoContext.Provider>
    </>
}