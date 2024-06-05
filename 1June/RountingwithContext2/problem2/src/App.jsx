
import './App.css'
import {Route,Routes} from 'react-router-dom'
import Products from './Pages/Products'
import Home from './Pages/Home'
import Navbar from './Navbar'
import ProductDetails from './Pages/ProductDetails'


function App() {
  

  return (
    <div style={{textAlign: 'center'}}> 
      <div>
         <Navbar/>
      </div>
      <Routes>
           <Route path='/'  element={<Home/>}/>
           <Route path='/Products'  element= {<Products/>}/>
           <Route path='/Products/:id'  element= {<ProductDetails/>}/>
      </Routes>
    </div>
  )
}

export default App
