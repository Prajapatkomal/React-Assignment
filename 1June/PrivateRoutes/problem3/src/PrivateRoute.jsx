
import { useContext } from 'react'
import { TokenContext } from './ToeknContext'
import {Navigate} from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const {token} = useContext(TokenContext)

  return (
    
      token ?  children : <Navigate to='/' />
    
     
  )
}

export default PrivateRoute