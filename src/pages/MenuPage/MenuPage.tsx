import {HitPointsInput} from 'components/HitPointsInput'
import {GameCtx} from 'contexts'
import {GameSetup, PlayerSetup} from 'model/setup'
import React, {FC, useContext, useState} from 'react'
import styles from './MenuPage.module.sass'

interface Props {
    goToGamePage: () => void
}

export const MenuPage: FC<Props> = ({goToGamePage}) => {
    const {startGame} = useContext(GameCtx)

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
                    startGame(GameSetup.duel(
                        PlayerSetup.from(parseInt(player1HitPointsTxt)),
                        PlayerSetup.from(parseInt(player2HitPointsTxt))
                    ))
                    goToGamePage()
                }}
            >
                Start Game
            </button>
        </div>
    </div>
}
