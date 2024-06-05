
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {TokenContextProvider} from './ToeknContext'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
 <TokenContextProvider>
    <App />
   </TokenContextProvider>
   </BrowserRouter>
  
)
