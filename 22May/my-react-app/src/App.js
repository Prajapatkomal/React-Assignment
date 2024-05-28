import logo from './logo.svg';
import './App.css';
import {useState}from 'react'


function App() {
const [count,setcount] = useState(0)


  return (
    <div className="App">
       <h1> Count:  {count} </h1> <br/>
     <button onClick={()=> setcount(count+1)}>Increment</button> 
     <button onClick={()=> setcount(count-1)}>Decrement</button>
    </div>
  );
}

export default App;
