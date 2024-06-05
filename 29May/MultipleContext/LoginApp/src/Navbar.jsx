import React, { useContext } from 'react'
import { AuthContext } from './UserContext'
import { ThemeContext } from './ThemeContext'

const Navbar = () => { 
    const {token} = useContext(AuthContext)
    const{theme,setTheme} = useContext(ThemeContext)
  return (
    <div>
            <button onClick={()=>setTheme(!theme)}>{theme? 'Light':'Dark'}</button>
            <h1>  {token? token   : 'Login  unsuccessful'}</h1>
    </div>
  )
}

export default Navbar