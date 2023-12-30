import {GameCtx} from 'contexts'
import {DuelPage} from 'pages/DuelPage'
import {MenuPage} from 'pages/MenuPage'
import {NoMatchPage} from 'pages/NoMatchPage'
import React, {FC} from 'react'
import {FullScreen, useFullScreenHandle} from 'react-full-screen'
import {Navigate, Route, Routes, useNavigate} from 'react-router-dom'
import {useGameState} from 'use-game-state'
import styles from './Root.module.sass'

export const Root: FC = () => {
    const fullScreenHandle = useFullScreenHandle()
    const navigate = useNavigate()
    const {
        game,
        startGame,
        finishGame,
        setHitPoints,
        finishTurn,
        setTrade,
        setCombat,
        setTradeCombatInputMode
    } = useGameState()

    return <div className={styles.root}>
        <button className={styles.fullscreenButton} onClick={fullScreenHandle.enter}>
            fullscreen
        </button>
        <FullScreen className={styles.fullscreen} handle={fullScreenHandle}>
            <GameCtx.Provider
                value={{
                    game,
                    startGame,
                    finishGame,
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
        </FullScreen>
    </div>
}
