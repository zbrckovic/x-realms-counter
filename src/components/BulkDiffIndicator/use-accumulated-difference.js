import { useEffect, useState } from 'react'
import { usePrevious } from '../../utils/use-previous'

export const useAccumulatedDifference = (value, resetToken, threshold = 2000) => {
  const [state, setState] = useState({ value, changeInProgress: false })

  const previousResetToken = usePrevious(resetToken)
  const didReset = previousResetToken !== resetToken

  useEffect(() => {
    if (didReset) {
      setState({ value, changeInProgress: false })
    } else {
      setState(old => {
        const isFreshStart = !old.changeInProgress
        return ({
          value: isFreshStart ? value : old.value,
          changeInProgress: true
        })
      })
      const timeoutId = setTimeout(() => {
        setState(old => ({ ...old, changeInProgress: false }))
      }, threshold)

      return () => clearTimeout(timeoutId)
    }
  }, [resetToken, value])

  return [value - state.value, state.changeInProgress]
}
