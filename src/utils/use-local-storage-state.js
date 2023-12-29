import { useCallback, useEffect, useState } from 'react'

export const useLocalStorageState = (key) => {
  const [state, setReactState] = useState(() => getFromLocalStorage(key))

  const setState = useCallback((updaterOrValue) => {
    setReactState(
      old => typeof updaterOrValue === 'function' ? updaterOrValue(old) : updaterOrValue
    )
  }, [])

  useEffect(() => {
    setToLocalStorage(key, state)
  }, [key, state])

  return [state, setState]
}

function getFromLocalStorage (key) {
  const json = localStorage.getItem(key)
  if (json === null) return undefined
  return JSON.parse(json)
}

function setToLocalStorage (key, value) {
  if (value === undefined || value === null) {
    localStorage.removeItem(key)
  } else {
    const json = JSON.stringify(value)
    localStorage.setItem(key, json)
  }
}
