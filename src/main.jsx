import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/Auth/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
      <App />
      <ToastContainer/>
    </AuthProvider>
  </Router>,
)
