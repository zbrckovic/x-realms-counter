import { useCallback, useState } from 'react'

export const useGameState = () => {
  const [game, setGame] = useState(undefined)

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
        tempTurnState: initTempTurn,
        turns: [...old.turns, nextTurn]
      }
    })
  }, [])

  const startGame = useCallback((setup) => {
    if (setup.mode !== 'Duel') throw new Error(`unsupported mode ${setup.mode}`)

    setGame({
      setup,
      turns: [
        {
          playerIndex: 0,
          hitPoints: setup.players.map(player => player.initHitPoints),
          tempTurnState: initTempTurn
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

const initTempTurn = {
  money: 0,
  combat: 0
}
