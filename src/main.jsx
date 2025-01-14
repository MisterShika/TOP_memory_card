import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Primary from './Primary.jsx'
import './style/reset.css'
import './style/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Primary />
  </StrictMode>,
)
