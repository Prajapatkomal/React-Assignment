
import './App.css'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Products from './Component/Products'
import  {Routes,Route} from 'react-router-dom'
import NavigationBar from './NavigationBar'

function App() {
  

  return (
    <div id='Appdiv'>
      <NavigationBar/>
      <Routes>
                 <Route path='/'  element={<Home/>}/>
                 <Route path='/About'  element={<About/>}/>
                 <Route path='/Contact'  element={<Contact/>}/>
                 <Route path='/Products'  element={<Products/>}/>
      </Routes>
    </div>
  )
}

export default App
