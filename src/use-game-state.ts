import { CounterMode } from 'model'
import { Game, TradeCombat, Turn } from 'model/game'
import { GameSetup, Layout } from 'model/setup'
import { SetStateAction, useCallback } from 'react'
import { applyAction } from 'utils/misc'
import { useLocalStorageState } from 'utils/use-local-storage-state'

export const useGameState = () => {
    const [game, setGame] = useLocalStorageState<Game | undefined>('game')

    const setCurrentTurn = useCallback((action: SetStateAction<Turn>) => {
        setGame(old => {
            if (old === undefined) throw new Error('game is undefined')

            const oldCurrentTurn = old.turns[old.turns.length - 1]
            const newCurrentTurn = applyAction<Turn>(action, oldCurrentTurn)
            return { ...old, turns: [...old.turns.slice(0, -1), newCurrentTurn] }
        })
    }, [])

    const finishTurn = useCallback(() => {
        setGame(old => {
            if (old === undefined) throw new Error('game is undefined')

            const currentTurn = old.turns[old.turns.length - 1]
            const isLastPlayersTurn = currentTurn.playerIndex + 1 === old.setup.players.length
            const nextPlayerIndex = isLastPlayersTurn ? 0 : currentTurn.playerIndex + 1
            const nextTurn = { ...currentTurn, playerIndex: nextPlayerIndex }

            return {
                ...old,
                tradeCombat: initTradeCombat,
                turns: [...old.turns, nextTurn]
            }
        })
    }, [])

    const startGame = useCallback((setup: GameSetup) => {
        if (setup.layout !== Layout.DUEL) throw new Error(`unsupported layout ${setup.layout}`)

        setGame({
            setup,
            tradeCombat: initTradeCombat,
            turns: [
                {
                    playerIndex: 0,
                    hitPoints: setup.players.map(player => player.initHitPoints)
                }
            ]
        })
    }, [])

    const finishGame = useCallback(() => {
        setGame(undefined)
    }, [])

    const setHitPoints = useCallback((i: number, updater: SetStateAction<number>) => {
        setCurrentTurn(old => {
            if (old === undefined) throw new Error('game is undefined')

            const oldHitPoints = old.hitPoints[i]
            const newHitPoints = applyAction(updater, oldHitPoints)
            const hitPoints = [...old.hitPoints]
            hitPoints.splice(i, 1, newHitPoints)

            return ({ ...old, hitPoints })
        })
    }, [])

    const setTradeCombat = useCallback((action: SetStateAction<TradeCombat>) => {
        setGame(old => {
            if (old === undefined) throw new Error('game is undefined')
            return ({ ...old, tradeCombat: applyAction(action, old.tradeCombat) })
        })
    }, [])

    const setTrade = useCallback((action: SetStateAction<number>) => {
        setTradeCombat(old => {
            if (old === undefined) throw new Error('game is undefined')
            return ({ ...old, trade: applyAction(action, old.trade) })
        })
    }, [])

    const setCombat = useCallback((action: SetStateAction<number>) => {
        setTradeCombat(old => {
            if (old === undefined) throw new Error('game is undefined')
            return ({ ...old, combat: applyAction(action, old.combat) })
        })
    }, [])

    const setTradeCombatInputMode = useCallback((action: SetStateAction<CounterMode>) => {
        setTradeCombat(old => {
            if (old === undefined) throw new Error('game is undefined')
            return ({ ...old, inputMode: applyAction(action, old.inputMode) })
        })
    }, [])

    return {
        game,
        startGame,
        finishGame,
        setHitPoints,
        finishTurn,
        setTrade,
        setCombat,
        setTradeCombatInputMode
    }
}

const initTradeCombat: TradeCombat = {
    inputMode: CounterMode.INCREMENT,
    trade: 0,
    combat: 0
}
