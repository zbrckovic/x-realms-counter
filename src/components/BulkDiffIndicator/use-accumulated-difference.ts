import { useEffect, useState } from 'react'
import { usePrevious } from 'utils/use-previous'

type Result = [number | undefined, boolean]

export const useAccumulatedDifference = (
    value: number,
    resetToken: unknown,
    threshold = 2000
): Result => {
    // Value at the start of changes.
    const [changes, setChanges] = useState({ startValue: value, inProgress: false, resetToken })

    const prevValue = usePrevious(value) ?? value

    useEffect(() => {
        if (changes.resetToken !== resetToken) {
            setChanges({ startValue: value, inProgress: false, resetToken })
            return undefined
        }

        setChanges(prev => ({
            ...prev,
            startValue: prev.inProgress ? prev.startValue : prevValue,
            inProgress: prev.startValue !== value
        }))

        const timeoutId = setTimeout(() => {
            setChanges(prev => ({ ...prev, inProgress: false }))
        }, threshold)

        return () => clearInterval(timeoutId)
    }, [prevValue, value, resetToken, threshold, changes.resetToken])

    return [value - changes.startValue, changes.inProgress]
}
