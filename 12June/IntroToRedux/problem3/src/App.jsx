
import { useState } from 'react'
import './App.css'
import { Store } from './Redux/Store'
import { add, sub } from './Redux/actionType'

function App() {
const [up, setup] = useState(0)

Store.subscribe(()=>{
  console.log(Store.getState())
  setup(up+1)
})

  return (
    <>
     <button onClick={()=>Store.dispatch({type:add})}>Add</button>
     <button onClick={()=>Store.dispatch({type:sub})}>Sub</button>
     {JSON.stringify(Store.getState())}
    </>
  )
}

export default App
