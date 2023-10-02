import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Global } from './Global.js'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Global />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
)