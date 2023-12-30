import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {HashRouter} from 'react-router-dom'
import {Root} from 'Root'
import '@fontsource-variable/orbitron'
import './styles/main.sass'
import './init-local-storage'

const root = document.getElementById('root')
if (root === null) throw new Error('Root element not found')

createRoot(root).render(
    <StrictMode>
        <HashRouter>
            <Root/>
        </HashRouter>
    </StrictMode>
)
