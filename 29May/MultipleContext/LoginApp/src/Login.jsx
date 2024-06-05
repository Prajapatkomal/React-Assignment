import { useContext, useState,useEffect } from "react"
import { AuthContext } from "./UserContext"


const Login = () => {

const [input,setinput] = useState({email:'', password: ''})
const {setToken} = useContext(AuthContext)
const [userdata,setuserdata] = useState([])


async function handleClick(){
  try {
    const res = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(input)
    })
    const data = await res.json()
    console.log(data.token)
    setToken(data.token)
  } catch (error) {
    console.log(error)
  }

}

// fetching data from api


async function fetchdata(){
    try {
           const res = await fetch('https://reqres.in/api/login')
           const data = await res.json()
           console.log(data.data)
           setuserdata(data.data)
    } catch (error) {
        console.log(error) 
    }
}

useEffect(()=>{
 fetchdata() 
  
},[])

 

  return (
    <>
    <div>
        <input type='text' placeholder='email' onChange={(e)=>setinput({...input,email: e.target.value})}/>
        <input type='text' placeholder='password' onChange={(e)=>setinput({...input, password: e.target.value})}/>
        <button onClick={handleClick}>Login</button>
    </div>
     <div style={{display:'grid', gridTemplateColumns: 'repeat(3,1fr)', marginTop: '50px'}} > 
        {userdata.map((el)=>{
            return  <ul key={el.id} >
              <p>Name :{el.name}</p> 
               <p>Year: {el.year}</p>
               <p>Pantone_value: {el.pantone_value}</p>
            </ul>
        })}
         

     </div>

    </>
  )
}

export default Login