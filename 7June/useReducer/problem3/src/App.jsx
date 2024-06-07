
import { useReducer } from 'react'
import './App.css'



function App() {
  
function themeReducer(state,action){
  switch(action.type){
   case 'THEME' : return !state 
   default : throw Error('action not found')
  }
 }

const [theme,dispatchTheme] = useReducer(themeReducer,false)


  return (

    <div style={{color:theme?'black':'white', backgroundColor:theme?'white':'black',margin:'auto', padding:'40px',height:'400px', width:'300px' , textAlign:'center',border: '1px solid '}}>
    
     <h1>Change Theme Color </h1>
    <button onClick={()=>dispatchTheme({type: 'THEME' })} style={{backgroundColor:theme?'black':'white', color: theme?'white':'black', fontSize:'20px'}}>{theme?'Dark':'Light'}</button>
    
     <h4>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis molestiae sint distinctio, sit repellendus ducimus ab illum. Aliquam, voluptates, cum quaerat dolorum vero odit, id nisi blanditiis explicabo incidunt amet.</h4>
     <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ratione recusandae molestias voluptates dolorem ducimus incidunt sed velit suscipit saepe nihil, dolor deserunt doloribus a praesentium nostrum animi! Libero, labore.</h5>
    </div>
  )
}

export default App
