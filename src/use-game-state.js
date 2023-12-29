import { useCallback } from 'react'
import { CounterMode } from './model'
import { useLocalStorageState } from './utils/use-local-storage-state'
import { Layout } from './model/setup'

export const useGameState = () => {
  const [game, setGame] = useLocalStorageState('game')

  const setCurrentTurn = useCallback(updater => {
    setGame(old => {
      const oldCurrentTurn = old.turns[old.turns.length - 1]
      const newCurrentTurn = updater(oldCurrentTurn)
      return { ...old, turns: [...old.turns.slice(0, -1), newCurrentTurn] }
    })
  }, [])

  const finishTurn = useCallback(() => {
    setGame(old => {
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

  const startGame = useCallback((setup) => {
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

  const setHitPoints = useCallback((i, updater) => {
    setCurrentTurn(old => {
      const oldHitPoints = old.hitPoints[i]
      const newHitPoints = updater(oldHitPoints)
      return ({ ...old, hitPoints: old.hitPoints.toSpliced(i, 1, newHitPoints) })
    })
  }, [])

  const setTradeCombat = useCallback(updater => {
    setGame(old => ({ ...old, tradeCombat: updater(old.tradeCombat) }))
  }, [])

  const setTrade = useCallback(updater => {
    setTradeCombat(old => ({ ...old, trade: updater(old.trade) }))
  }, [])

  const setCombat = useCallback(updater => {
    setTradeCombat(old => ({ ...old, combat: updater(old.combat) }))
  }, [])

  const setTradeCombatInputMode = useCallback(updater => {
    setTradeCombat(old => ({ ...old, inputMode: updater(old.inputMode) }))
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

const initTradeCombat = {
  inputMode: CounterMode.INCREMENT,
  trade: 0,
  combat: 0
}
