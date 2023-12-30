import {Dispatch, SetStateAction, useEffect, useState} from 'react'

type ReturnValue<T> = [T | undefined, Dispatch<SetStateAction<T | undefined>>]

export const useLocalStorageState = <T>(key: string): ReturnValue<T> => {
    const [state, setState] = useState<T | undefined>(() => getFromLocalStorage<T>(key))

    useEffect(() => {
        setToLocalStorage(key, state)
    }, [key, state])

    return [state, setState]
}

function getFromLocalStorage<T>(key: string): T | undefined {
    const json = localStorage.getItem(key)
    if (json === null) return undefined
    return JSON.parse(json)
}

function setToLocalStorage<T>(key: string, value: T) {
    if (value === undefined || value === null) {
        localStorage.removeItem(key)
    } else {
        const json = JSON.stringify(value)
        localStorage.setItem(key, json)
    }
}
