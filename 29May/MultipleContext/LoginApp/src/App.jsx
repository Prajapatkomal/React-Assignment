import { ThemeContext } from "./ThemeContext"
import { useContext } from "react"
import './App.css'
import Navbar from './Navbar'
import Login from './Login'

// Managing Multiple Contexts in a React Application

function App() {
  const{theme} = useContext(ThemeContext)

  return (
    <div id='Appdiv' style={{backgroundColor: theme? 'black':'white', color: theme? 'white':'black'}}>
            <Navbar/>
            <Login/>
    </div>
  )
}

export default App
