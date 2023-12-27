import React from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import styles from './Root.module.sass'
import { GameCtx } from './contexts'
import { MenuPage } from './pages/MenuPage'
import { DuelPage } from './pages/DuelPage'
import { NoMatchPage } from './pages/NoMatchPage'
import { useGameState } from './use-game-state'

export const Root = () => {
  const navigate = useNavigate()
  const {
    game,
    startGame,
    setHitPoints,
    finishTurn,
    setTrade,
    setCombat,
    setTradeCombatInputMode
  } = useGameState()

  return <div className={styles.root}>
    <GameCtx.Provider
      value={{
        game,
        startGame,
        finishTurn,
        setHitPoints,
        setTrade,
        setCombat,
        setTradeCombatInputMode
      }}
    >
      <Routes>
        <Route
          index
          element={
            <MenuPage goToGamePage={() => { navigate('/game') }}/>
          }
        />
        <Route
          path="game"
          element={game === undefined ? <Navigate replace to="/"/> : <DuelPage/>}
        />
        <Route path="*" element={<NoMatchPage/>}/>
      </Routes>
    </GameCtx.Provider>
  </div>
}
