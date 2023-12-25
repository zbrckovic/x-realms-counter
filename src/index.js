import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { MainPage } from 'pages/MainPage'
import { GamePage } from 'pages/GamePage'
import { Root } from './Root'
import './styles/main.sass'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root/>}>
          <Route index element={<MainPage/>}/>
          <Route path="game" element={<GamePage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
