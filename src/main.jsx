import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./../node_modules/@fortawesome/fontawesome-free/css/all.min.css"
import "./../node_modules/bootstrap/dist/js/bootstrap.min.js"
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)