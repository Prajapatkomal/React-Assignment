
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthContexProvider } from './UserContext.jsx'
import { ThemeContextProvider } from './ThemeContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeContextProvider>
   <AuthContexProvider>
         <App />
   </AuthContexProvider> 
   </ThemeContextProvider>

)
