import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Primary from './Primary.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Primary />
  </StrictMode>,
)
