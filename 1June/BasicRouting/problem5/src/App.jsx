
import './App.css'
import Home from './Component/Home'
import Login from './Component/Login'
import Users from './Component/Users'
import  {Routes,Route} from 'react-router-dom'
import NavBar from './Navbar'

function App() {
  

  return (
    <div id='Appdiv'>
      <NavBar/>
      <Routes>
                 <Route path='/'  element={<Home/>}/>
                 <Route path='/Login'  element={<Login/>}/>
                 <Route path='/Users'  element={<Users/>}/>
               
      </Routes>
    </div>
  )
}

export default App
