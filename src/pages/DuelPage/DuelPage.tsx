import classNames from 'classnames'
import {Player} from 'components/Player'
import {TradeCombat} from 'components/TradeCombat'
import {TradeAndCombatAlignment} from 'components/TradeCombat/common'
import {GameCtx} from 'contexts'
import {HitPointDiffIndicatorPosition} from 'model'
import React, {Fragment, useContext} from 'react'
import styles from './DuelPage.module.sass'
import {FinishButton} from './FinishButton'

const hitPointDiffIndicatorPositions = [
    HitPointDiffIndicatorPosition.TOP_LEFT,
    HitPointDiffIndicatorPosition.TOP_RIGHT
]

const sideClasses = [styles.leftPlayer, styles.rightPlayer]
const alignments = [TradeAndCombatAlignment.LEFT, TradeAndCombatAlignment.RIGHT]

export const DuelPage = () => {
    const {
        game,
        setHitPoints,
        finishTurn,
        finishGame,
        setTrade,
        setCombat,
        setTradeCombatInputMode
    } = useContext(GameCtx)

    if (game === undefined) throw new Error('game is undefined')

    const {setup, tradeCombat, turns} = game

    const turnIndex = turns.length - 1
    const currentTurn = turns[turnIndex]

    return <div className={styles.root}>
        {
            setup.players.map((player, i) => {
                const prevHitPoints = turns.length === 1
                    ? player.initHitPoints
                    : turns[turns.length - 2].hitPoints[i]

                return <Fragment key={i}>
                    <Player
                        key={i}
                        prevHitPoints={prevHitPoints}
                        hitPoints={currentTurn.hitPoints[i]}
                        setHitPoints={updater => setHitPoints(i, updater)}
                        hitPointDiffIndicatorPosition={hitPointDiffIndicatorPositions[i]}
                        turnIndex={turnIndex}
                    />
                    <TradeCombat
                        className={classNames(styles.tradeAndCombat, sideClasses[i])}
                        alignment={alignments[i]}
                        setTrade={setTrade}
                        setCombat={setCombat}
                        setInputMode={setTradeCombatInputMode}
                        turnIndex={turnIndex}
                        enabled={currentTurn.playerIndex === i}
                        {...tradeCombat}
                    />
                </Fragment>
            })
        }
        <FinishButton
            className={styles.finishTurnButton}
            onFinishTurn={finishTurn}
            onFinishGame={finishGame}
        />
    </div>
}
