import { useCallback, useState } from 'react'
import './App.css'
import Post from './Component/Post'

function App() {
  const [timer, setTimer] = useState(0)
  const[isRunning,setIsRunning] = useState(false)

  const [post,setPost] = useState({title:'',body:''})
  const [data,setdata] = useState([])



  if(!isRunning){
    setIsRunning(true)
    setInterval(()=>{
      setTimer(prev=>prev+1)
   },1000)
  } 


const handleChange = useCallback((e)=>{
  const {name, value} = e.target
 setPost({...post,[name] : value})

},[])

const  addPost = ()=>{
  console.log(data)
  setdata([...data,post])
}

  return (
    <div style={{textAlign:'center'}}>
       <h1>Timer -{timer} </h1>
      <input type='text' onChange={handleChange} placeholder='Enter post title' name='title'/> <br/>
      <input type='text' onChange={handleChange} placeholder='Enter post body' name='body'/> <br/>
      <button onClick={addPost}>Add Post</button>
      <Post data={data}/>

    </div>
  )
}

export default App
