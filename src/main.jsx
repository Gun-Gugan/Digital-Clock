import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import DigitalWatch from './DIgitalClock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DigitalWatch />
  </StrictMode>,
)
