import React, { useContext } from 'react'
import { Player } from './Player'
import styles from './DuelPage.module.sass'
import { GameCtx } from 'contexts'
import { TradeCombat } from '../../components/TradeCombat'
import classNames from 'classnames'
import { TradeAndCombatAlignment } from '../../components/TradeCombat/common'

const turnSideClasses = [styles.leftPlayersTurn, styles.rightPlayersTurn]
const tradeAndCombatAlignments = [TradeAndCombatAlignment.LEFT, TradeAndCombatAlignment.RIGHT]

export const DuelPage = () => {
  const {
    game: {
      tradeCombat,
      turns,
      setup: { players }
    },
    setHitPoints,
    finishTurn,
    setTrade,
    setCombat,
    setTradeCombatInputMode
  } = useContext(GameCtx)

  const currentTurn = turns[turns.length - 1]

  const { playerIndex, hitPoints } = currentTurn
  return <div className={styles.root}>
    {
      players.map((player, i) => {
        const prevHitPoints = turns.length === 1 ? player.initHitPoints : turns[turns.length - 2].hitPoints[i]

        return (
          <Player
            key={i}
            playerStyle={player.style}
            prevHitPoints={prevHitPoints}
            hitPoints={hitPoints[i]}
            setHitPoints={updater => {
              setHitPoints(i, updater)
            }}
            hasTurn={i === playerIndex}
          />
        )
      })
    }
    <button
      className={styles.finishTurnButton}
      onClick={finishTurn}
    >
      Finish Turn
    </button>
    <TradeCombat
      className={classNames(styles.tradeAndCombat, turnSideClasses[playerIndex])}
      alignment={tradeAndCombatAlignments[playerIndex]}
      setTrade={setTrade}
      setCombat={setCombat}
      setInputMode={setTradeCombatInputMode}
      {...tradeCombat}
    />
  </div>
}