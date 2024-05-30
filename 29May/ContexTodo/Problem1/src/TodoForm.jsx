import { useContext } from "react"
import { TodoContext } from "./Context"



const TodoForm = () => {
    const {todo,setTodo,newTodo,setNewTodo} = useContext(TodoContext)

    function addTodo(e){
  
        e.preventDefault()
        setTodo([...todo, newTodo])
      

       setNewTodo({             //for empty the inputBox
        task : "",
        status : false,
        assignee : ""
       })
        }
    
    function handleChange(e){ 

           const {name, type, value, checked } = e.target;
           setNewTodo({ ...newTodo,[name]: type === "checkbox" ? checked : value });
    }
   

  return (
    <div>  <h1>Todo App</h1>
        <form onSubmit={addTodo}>
        Task :  <input type='text'onChange={handleChange} value={newTodo.task} name='task' /> 
        Status: <input type='checkbox' onChange={handleChange} checked={newTodo.status} name='status' />  <br/>
      Assignee: <input type='text' onChange={handleChange} value={newTodo.assignee} name='assignee'/>
      <button>Add</button>
      </form>
    </div>
  )
}

export default TodoForm