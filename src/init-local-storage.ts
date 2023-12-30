const prevVersion = localStorage.getItem('VERSION') ?? undefined
const version = process.env.VERSION

if (prevVersion !== version) {
  // Migration not supported at such early stage of development. And due to the nature of the app,
  // maybe never will be.
  console.log('Clearing local storage due to version mismatch.')
  localStorage.clear()
}

localStorage.setItem('VERSION', version)
