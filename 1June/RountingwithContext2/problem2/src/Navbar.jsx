import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
 const active = {color: 'green'}
 const inactive = {color: 'black'}

  return (
    <div style={{fontSize:'30px', display: 'flex', gap:'300px', marginLeft: '33%'}}>
         <NavLink style = {({isActive})=> isActive ? active:inactive} to='/'>Home</NavLink>
         <NavLink style = {({isActive})=> isActive ? active:inactive} to='/Products'>Products</NavLink>


    </div>
  )
}

export default Navbar