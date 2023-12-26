import React, { useContext } from 'react'
import { Player } from './Player'
import styles from './GamePage.module.sass'
import { GameCtx } from 'contexts'

export const GamePage = () => {
  const {
    game: { turns, setup: { players } },
    setHitPoints,
    finishTurn,
  } = useContext(GameCtx)

  const currentTurn = turns[turns.length - 1]

  const { playerIndex, hitPoints } = currentTurn
  return <div className={styles.root}>
    {
      players.map((player, i) => {
        const prevHitPoints = turns.length === 1 ? player.initHitPoints : turns[turns.length - 2].hitPoints[i]

        return (
          <Player
            key={i}
            playerStyle={player.style}
            prevHitPoints={prevHitPoints}
            hitPoints={hitPoints[i]}
            setHitPoints={updater => {
              setHitPoints(i, updater)
            }}
            hasTurn={i === playerIndex}
          />
        )
      })
    }
    <button
      className={styles.finishTurnButton}
      onClick={finishTurn}
    >
      Finish Turn
    </button>
  </div>
}
