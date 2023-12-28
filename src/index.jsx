import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './Root'
import { HashRouter } from 'react-router-dom'
import '@fontsource-variable/orbitron'
import './styles/main.sass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Root/>
    </HashRouter>
  </StrictMode>
)
