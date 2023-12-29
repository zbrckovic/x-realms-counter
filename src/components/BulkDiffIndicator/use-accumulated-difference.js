import { useEffect, useState } from 'react'

export const useAccumulatedDifference = (value, resetToken, threshold = 2000) => {
  const [state, setState] = useState({ value, resetToken })

  useEffect(() => {
    if (state.resetToken !== resetToken) {
      setState({ value, resetToken })
      return
    }

    const timeoutId = setTimeout(() => {
      setState(old => ({ ...old, value }))
    }, threshold)

    return () => clearTimeout(timeoutId)
  }, [value, resetToken])

  if (state.value === undefined) return undefined
  if (state.value === value) return undefined
  return value - state.value
}
