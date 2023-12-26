import React, { useContext } from 'react'
import styles from './MainPage.module.sass'
import { GameCtx, SetupCtx } from 'contexts'

export const MainPage = ({ goToGamePage }) => {
  const { setup } = useContext(SetupCtx)
  const { startGame } = useContext(GameCtx)

  return <div className={styles.root}>
    <h1>Main</h1>
    <button
      onClick={() => {
        startGame(setup)
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
