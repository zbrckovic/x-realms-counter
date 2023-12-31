import { DuelPage } from 'pages/DuelPage'
import { MenuPage } from 'pages/MenuPage'
import { NoMatchPage } from 'pages/NoMatchPage'
import React, { FC, useCallback } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { useGameState } from 'use-game-state'
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

    const handleGoToGamePage = useCallback(() => {
        navigate('/game')
    }, [navigate])

    return <div className={styles.root}>
        <button className={styles.fullscreenButton} onClick={fullScreenHandle.enter}>
            Fullscreen
        </button>
        <FullScreen className={styles.fullscreen} handle={fullScreenHandle}>
            <Routes>
                <Route
                    index
                    element={
                        <MenuPage
                            goToGamePage={handleGoToGamePage}
                            startGame={startGame}/>
                    }
                />
                <Route
                    path="game"
                    element={
                        game === undefined
                            ? <Navigate replace to="/"/>
                            : <DuelPage
                                game={game}
                                finishGame={finishGame}
                                finishTurn={finishTurn}
                                setHitPoints={setHitPoints}
                                setTrade={setTrade}
                                setCombat={setCombat}
                                setTradeCombatInputMode={setTradeCombatInputMode}
                            />
                    }
                />
                <Route path="*" element={<NoMatchPage/>}/>
            </Routes>
        </FullScreen>
    </div>
}
