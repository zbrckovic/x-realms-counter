import { config } from 'config'

const storedVersion = localStorage.getItem('VERSION') ?? undefined

if (storedVersion !== config.version) {
    // Migration not supported at such early stage of development. And due to the nature of the app,
    // maybe never will be.
    console.log(`Clearing local storage due to version mismatch: ${storedVersion} -> ${config.version}`)
    localStorage.clear()
}

localStorage.setItem('VERSION', config.version)
