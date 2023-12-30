import { SetStateAction } from 'react'

export const applyAction = <T>(action: SetStateAction<T>, prevValue: T): T => {
    if (typeof action === 'function') {
        return (action as Function)(prevValue as any)
    } else {
        return prevValue
    }
}
