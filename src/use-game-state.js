import { useCallback, useState } from 'react'

const initTempTurnState = {
  combatGain: 0,
  moneyGain: 0
}

export const useGameState = () => {
  const [game, setGame] = useState(undefined)
  const [tempTurnState, setTempTurnState] = useState(initTempTurnState)

  const setCurrentTurn = useCallback(updater => {
    setGame(old => {
      const oldCurrentTurn = old.turns[old.turns.length - 1]
      const newCurrentTurn = updater(oldCurrentTurn)
      return { ...old, turns: [...old.turns.slice(0, -1), newCurrentTurn] }
    })
  }, [])

  const finishTurn = useCallback(() => {
    setTempTurnState(initTempTurnState)
    setGame(old => {
      const currentTurn = old.turns[old.turns.length - 1]
      const isLastPlayersTurn = currentTurn.playerIndex + 1 === old.setup.players.length
      const nextPlayerIndex = isLastPlayersTurn ? 0 : currentTurn.playerIndex + 1
      const nextTurn = { ...currentTurn, playerIndex: nextPlayerIndex }

      return { ...old, turns: [...old.turns, nextTurn] }
    })
  }, [])

  const startGame = useCallback((setup) => {
    setGame({
      setup,
      turns: [
        {
          playerIndex: 0,
          hitPoints: setup.players.map(player => player.initHitPoints)
        }
      ]
    })
  }, [])

  const setHitPoints = useCallback((i, updater) => {
    setCurrentTurn(old => {
      const oldHitPoints = old.hitPoints[i]
      const newHitPoints = updater(oldHitPoints)
      return ({ ...old, hitPoints: old.hitPoints.toSpliced(i, 1, newHitPoints) })
    })
  }, [])

  return {
    game,
    startGame,
    setHitPoints,
    finishTurn
  }
}
