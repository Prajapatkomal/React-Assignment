
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Navbar from './NAvbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact  from './pages/Contact'
import Products from './pages/Products'
import PrivateRoute from './PrivateRoute'


function App() {
 
  return (
     <div id='Appdiv'>
            <div>
                <Navbar/>
              </div> 
      <Routes>
         <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/product' element={<PrivateRoute> <Products/> </PrivateRoute>} />

      </Routes> 
    </div>
  )
}

export default App
