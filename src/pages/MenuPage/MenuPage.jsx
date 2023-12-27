import React, { useContext } from 'react'
import styles from './MenuPage.module.sass'
import { GameCtx } from 'contexts'
import { PlayerStyle } from '../../player-style'

export const MenuPage = ({ goToGamePage }) => {
  const { startGame } = useContext(GameCtx)

  return <div className={styles.root}>
    <h1>Counter</h1>
    <button
      onClick={() => {
        startGame({
          mode: 'Duel',
          players: [
            {
              style: PlayerStyle.RED,
              initHitPoints: 60
            },
            {
              style: PlayerStyle.BLUE,
              initHitPoints: 80
            }
          ]
        })
        goToGamePage()
      }}
    >
      Start Game
    </button>
  </div>
}
