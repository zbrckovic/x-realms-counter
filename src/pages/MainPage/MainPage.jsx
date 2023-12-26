import React, { useContext } from 'react'
import styles from './MainPage.module.sass'
import { GameCtx } from 'contexts'
import { PlayerStyle } from '../../player-style'

export const MainPage = ({ goToGamePage }) => {
  const { startGame } = useContext(GameCtx)

  return <div className={styles.root}>
    <h1>Main</h1>
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
