
import { TokenContext } from '../ToeknContext'
import { useContext , useState} from 'react'

const Home = () => {
  const [input,setinput] = useState({email: '' , password: ''})
  const {setToken} = useContext(TokenContext)


  

async function handleClick(){
  try {
    const res = await fetch('https://reqres.in/api/login',{
        method: 'POST',
        headers: {'content-type' : 'application/json'},
        body: JSON.stringify(input)
    })
    const data = await res.json()
    setToken(data.token)
  } catch (error) {
    console.log(error)
  }

}


  return (
    <div>
      <h2> Sign In Here</h2>
    <input type='text' placeholder='type email here' onChange={(e)=>setinput({...input,email: e.target.value})}/>
    <input type='text' placeholder='type password here' onChange={(e)=>setinput({...input,password: e.target.value})}/>
    <button onClick={handleClick}>Login</button>
</div>
  )
}

export default Home