import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style/variables.css";
import './index.css'
import "./style/style.css"


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
