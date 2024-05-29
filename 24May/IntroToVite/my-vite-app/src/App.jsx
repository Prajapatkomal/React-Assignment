import { useState } from 'react'
import './App.css'

function App() {
  const[task,setTask] = useState([])
  const [todo,setTodo] = useState("")

function addTask(){
  if(todo===""){
    console.log("please enter Todo task here")
  }else{
    setTask([...task, {text:todo, completed:false}])
  }
console.log(task)
console.log(todo)
  setTodo("")
}

function taskCompleted(ind){
const updateTask=  task.map((todo,i)=>{
  return i===ind ? {...todo, completed: !todo.completed} : todo
})

setTask(updateTask)
}


 


function removeTodo(ind){
     setTask( task.filter((todo,i)=> i!=ind
    ))
}


  return (
    <>
      <div>
         <input type="text" placeholder="Type Task Here" value={todo} onChange={(e)=> setTodo(e.target.value)}/>  <br/>
         <button onClick={ ()=>addTask(todo)}>Add Todo</button>
      </div>
      <div>
             {task.map((todo,ind)=>{
                 return  <ul key={ind}>
                     {todo.text}
                     <input type="checkbox" checked={todo.completed} onChange={()=>taskCompleted(ind)}/>
                     <button onClick={()=>removeTodo(ind)}>Remove</button>
                </ul>
                 
             })}
      </div>
    </>
  )
}

export default App
