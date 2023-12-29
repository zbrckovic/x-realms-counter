import React, { useContext, useState } from 'react'
import styles from './MenuPage.module.sass'
import { GameCtx } from 'contexts'
import { PlayerStyle } from '../../player-style'
import { HitPointsInput } from '../../components/HitPointsInput'
import { Layout } from '../../model'

export const MenuPage = ({ goToGamePage }) => {
  const { startGame } = useContext(GameCtx)

  const [player1HitPointsTxt, setPlayer1HitPoints] = useState(50)
  const [player2HitPointsTxt, setPlayer2HitPoints] = useState(50)

  return <div className={styles.root}>
    <div className={styles.container}>
      <h1>Counter</h1>
      <div className={styles.field}>
        <label>Player 1</label>
        <HitPointsInput
          className={styles.hitPoints}
          value={player1HitPointsTxt}
          onChange={setPlayer1HitPoints}
        />
      </div>
      <div className={styles.field}>
        <label>Player 2</label>
        <HitPointsInput
          className={styles.hitPoints}
          value={player2HitPointsTxt}
          onChange={setPlayer2HitPoints}
        />
      </div>
      <button
        className={styles.startButton}
        disabled={player1HitPointsTxt === undefined || player2HitPointsTxt === undefined}
        onClick={() => {
          startGame({
            layout: Layout.DUEL,
            players: [
              {
                style: PlayerStyle.RED,
                initHitPoints: player1HitPointsTxt
              },
              {
                style: PlayerStyle.BLUE,
                initHitPoints: player2HitPointsTxt
              }
            ]
          })
          goToGamePage()
        }}
      >
        Start Game
      </button>
    </div>
  </div>
}
