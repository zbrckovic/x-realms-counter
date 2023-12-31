import { HitPointsInput } from 'components/HitPointsInput'
import React, { FC, useState } from 'react'
import styles from './MenuPage.module.sass'
import { Version } from 'components/VersionIndicator'
import { createDuel, GameSetup } from 'model/game-setup'

interface Props {
    goToGamePage: () => void,
    startGame: (setup: GameSetup) => void
}

export const MenuPage: FC<Props> = ({ goToGamePage, startGame }) => {
    const [player1HitPointsTxt, setPlayer1HitPoints] = useState('50')
    const [player2HitPointsTxt, setPlayer2HitPoints] = useState('50')

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
                    startGame(createDuel(
                        { initHitPoints: parseInt(player1HitPointsTxt) },
                        { initHitPoints: parseInt(player2HitPointsTxt) },
                    ))
                    goToGamePage()
                }}
            >
                Start Game
            </button>
            <Version className={styles.version}/>
        </div>
    </div>
}
