import React, { useContext } from 'react'
import styles from './DuelPage.module.sass'
import { GameCtx } from 'contexts'
import { TradeCombat } from 'components/TradeCombat'
import classNames from 'classnames'
import { TradeAndCombatAlignment } from 'components/TradeCombat/common'
import { FinishButton } from './FinishButton'
import { HitPointDiffIndicatorPosition } from 'model'
import { Player } from 'components/Player'

const turnSideClasses = [styles.leftPlayersTurn, styles.rightPlayersTurn]
const tradeAndCombatAlignments = [TradeAndCombatAlignment.LEFT, TradeAndCombatAlignment.RIGHT]

const hitPointDiffIndicatorPositions = [
  HitPointDiffIndicatorPosition.TOP_LEFT,
  HitPointDiffIndicatorPosition.TOP_RIGHT
]

export const DuelPage = () => {
  const {
    game: {
      setup,
      tradeCombat,
      turns
    },
    setHitPoints,
    finishTurn,
    finishGame,
    setTrade,
    setCombat,
    setTradeCombatInputMode
  } = useContext(GameCtx)

  const currentTurn = turns[turns.length - 1]

  const { playerIndex, hitPoints } = currentTurn

  return <div className={styles.root}>
    {
      setup.players.map((player, i) => {
        const prevHitPoints = turns.length === 1
          ? player.initHitPoints
          : turns[turns.length - 2].hitPoints[i]

        return (
          <Player
            key={i}
            prevHitPoints={prevHitPoints}
            hitPoints={hitPoints[i]}
            setHitPoints={updater => setHitPoints(i, updater)}
            playerAtTurn={playerIndex}
            hitPointDiffIndicatorPosition={hitPointDiffIndicatorPositions[i]}
          />
        )
      })
    }
    <FinishButton
      className={styles.finishTurnButton}
      onFinishTurn={finishTurn}
      onFinishGame={finishGame}
    />
    <TradeCombat
      className={classNames(styles.tradeAndCombat, turnSideClasses[playerIndex])}
      alignment={tradeAndCombatAlignments[playerIndex]}
      setTrade={setTrade}
      setCombat={setCombat}
      setInputMode={setTradeCombatInputMode}
      playerAtTurn={playerIndex}
      {...tradeCombat}
    />
  </div>
}
