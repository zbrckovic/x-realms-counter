import React, { useContext } from 'react'
import { Player } from './Player'
import styles from './GamePage.module.sass'
import { MainCtx } from '../../contexts'

export const GamePage = () => {
  const {
    setup: { players },
    game: { turns },
    finishTurn,
    setCurrentTurn,
  } = useContext(MainCtx)

  const currentTurn = turns[turns.length - 1]

  const { playerIndex, hitPoints } = currentTurn
  return <div className={styles.root}>
    {
      players.map((player, i) => {
        const prevHitPoints = turns.length === 1 ? player.initHitPoints : turns[turns.length - 2].hitPoints[i]

        console.log(player.style, prevHitPoints)

        return (
          <Player
            key={i}
            playerStyle={player.style}
            className={styles.player}
            prevHitPoints={prevHitPoints}
            hitPoints={hitPoints[i]}
            setHitPoints={(updater) => {
              setCurrentTurn(old => {
                const oldHitPoints = old.hitPoints[i]
                const newHitPoints = updater(oldHitPoints)
                return ({ ...old, hitPoints: old.hitPoints.toSpliced(i, 1, newHitPoints) })
              })
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
