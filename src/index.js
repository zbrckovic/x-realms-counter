import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import './styles/main.sass'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<App/>)
