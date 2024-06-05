
import { useContext } from 'react'
import{NavLink} from 'react-router-dom'
import { TokenContext } from './ToeknContext'

const Navbar = () => {
const {token } = useContext(TokenContext)
console.log(token)
  const active = {color :'green'}
  const inactive =  {color :'red'}

  return (
  <>
      
    <div style={{display:'flex', gap:'100px'}}>
        <h2>token :{token ? token : 'Not Found'}</h2>
        
      <NavLink style={({isActive})=> isActive? active:inactive} to='/'> Home </NavLink>
      <NavLink  style={({isActive})=> isActive? active:inactive} to='/About'>About</NavLink>
      <NavLink  style={({isActive})=> isActive? active:inactive} to='/Contact'>Contact</NavLink>
      <NavLink  style={({isActive})=> isActive? active:inactive} to='Product'>Product</NavLink>

  </div>
  </>
  )
}

export default Navbar