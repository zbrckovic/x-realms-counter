import React, { useContext } from 'react'
import styles from './MainPage.module.sass'
import { MainCtx } from '../../contexts'

export const MainPage = ({ goToGamePage }) => {
  const { setup, setGame } = useContext(MainCtx)

  return <div className={styles.root}>
    <h1>Main</h1>
    <button
      onClick={() => {
        setGame({
          turns: [
            {
              playerIndex: 0,
              hitPoints: setup.players.map(player => player.initHitPoints)
            }
          ]
        })
        goToGamePage()
      }}
    >
      Start Game
    </button>
    <pre>
      {JSON.stringify(setup, undefined, 4)}
    </pre>
  </div>
}
