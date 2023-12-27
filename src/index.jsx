import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Root } from './Root'
import { BrowserRouter } from 'react-router-dom'
import './styles/main.sass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/x-realms-counter'>
      <Root/>
    </BrowserRouter>
  </StrictMode>
)
