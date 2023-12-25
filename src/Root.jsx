import React, { useCallback, useState } from 'react'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import styles from './Root.module.sass'
import { PlayerStyle } from './player-style'
import { MainCtx } from './contexts'
import { MainPage } from './pages/MainPage'
import { GamePage } from './pages/GamePage'
import { NoMatchPage } from './pages/NoMatchPage'

const initTempTurnState = {
  combatGain: 0,
  moneyGain: 0
}

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
  const [game, setGame] = useState(undefined)
  const [tempTurnState, setTempTurnState] = useState(initTempTurnState)

  const setCurrentTurn = useCallback(updater => {
    setGame(old => {
      const oldCurrentTurn = old.turns[old.turns.length - 1]
      const newCurrentTurn = updater(oldCurrentTurn)
      return { ...old, turns: [...old.turns.slice(0, -1), newCurrentTurn] }
    })
  }, [])

  const finishTurn = useCallback(() => {
    setTempTurnState(initTempTurnState)
    setGame(old => {
      const currentTurn = old.turns[old.turns.length - 1]
      const isLastPlayersTurn = currentTurn.playerIndex + 1 === setup.players.length
      const nextPlayerIndex = isLastPlayersTurn ? 0 : currentTurn.playerIndex + 1
      const nextTurn = { ...currentTurn, playerIndex: nextPlayerIndex }

      return { ...old, turns: [...old.turns, nextTurn] }
    })
  }, [])

  return <div className={styles.root}>
    <MainCtx.Provider
      value={{
        setup,
        setSetup,
        game,
        setGame,
        finishTurn,
        tempTurnState,
        setTempTurnState,
        setCurrentTurn
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
