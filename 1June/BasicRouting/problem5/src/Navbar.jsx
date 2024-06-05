
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
const navigate = useNavigate()
  return (
    <nav style={{display:'flex', justifyContent: 'space-around', fontSize: '20px'}}>
         <ul onClick={()=>navigate('./')}>Home</ul>
         <ul onClick={()=>navigate('./Login')}>Login</ul>
         <ul onClick={()=>navigate('./Users')}>Users</ul>

    </nav>
  )
}

export default Navbar