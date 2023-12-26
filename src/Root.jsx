import React, { useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import styles from './Root.module.sass'
import { PlayerStyle } from './player-style'
import { MainCtx } from './contexts'
import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
import { NoMatchPage } from './pages/NoMatchPage'
import { useGameState } from './use-game-state'

export const Root = () => {
  const navigate = useNavigate()

  const [setup, setSetup] = useState(() => ({
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
  }))
  const { game, startGame, setHitPoints, finishTurn } = useGameState(setup)

  return <div className={styles.root}>
    <MainCtx.Provider
      value={{
        setup,
        setSetup,
        game,
        startGame,
        finishTurn,
        setHitPoints
      }}
    >
      <Routes>
        <Route
          index
          element={
            <MainPage goToGamePage={() => { navigate('/game') }}/>
          }
        />
        <Route
          path="game"
          element={game === undefined ? <Navigate replace to="/"/> : <GamePage/>}
        />
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
    </MainCtx.Provider>
  </div>
}
