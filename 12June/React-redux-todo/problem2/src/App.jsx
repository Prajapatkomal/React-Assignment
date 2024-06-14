
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import {   useState } from 'react'



function App() {
 const data = useSelector(state=>state)
 const dispatch= useDispatch()

 const[id,setid] = useState('')
 const[title,settitle] = useState('')
 const[status,setstatus] = useState(false)

console.log(id,title,status)
 
 function handleClick(){
  dispatch({type:'ADDTODO', id,title,status})

  setid('')
  settitle('')
  setstatus(false)

  console.log(data)
 }

 function handleDelete(id){
  dispatch({type:'DELETE' ,id})
 }



  function handleupdate(id){
    dispatch({type:'UPDATETODO' ,id})

 }

 
 



  return (
    <div style={{border:'1px solid' , width:'fit-content', padding:'20px', textAlign:'center'}} >
     <h1>Todo App</h1> 
    <div>
         <input type='text' value={id} onChange={(e)=>setid(e.target.value)} placeholder='Type id here' />  
         <input type='text' value={title}  onChange={(e)=>settitle(e.target.value)} placeholder='Type Title here'/>
        <input type='checkbox' checked={status}  onChange={(e)=>setstatus(e.target.checked)} />
        <button onClick={handleClick}>Add</button>
    </div>
  <div>
      {data.map((el,ind)=>{
        return <ul key={ind}  style={{display:'flex' ,backgroundColor:'lightblue', width:'90%', padding:'10px', justifyContent:'space-between'}}>
             <div>{el.id} </div>
             <div> {el.title}  </div> 
            <input type='checkbox'  onChange={()=>handleupdate(el.id)}   checked={el.status}/>
            <button onClick={()=>handleDelete(el.id)}>Delete</button>
              </ul>
      })}
</div>
    </div>
  )
}

export default App


