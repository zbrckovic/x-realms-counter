import React from 'react'
import styles from './Player.module.sass'
import classNames from 'classnames'
import { PlayerStyle } from '../../player-style'

export const Player = ({ className, prevHitPoints, hitPoints, playerStyle, hasTurn, setHitPoints }) => {
  const hitPointsDiff = hitPoints - prevHitPoints

  return <div
    className={classNames(
      styles.root,
      { [styles.hasTurn]: hasTurn },
      playerStyleClasses[playerStyle],
      className
    )}
  >
    <label className={styles.hitPointsLabel}>{hitPoints}</label>
    {hitPointsDiff !== 0 && <label className={styles.hitPointsDiffLabel}>{hitPointsDiff}</label>}
    <button
      className={styles.incrementButton}
      onClick={() => setHitPoints(old => old + 1)}
    >
      Increment
    </button>
    <button
      className={styles.decrementButton}
      onClick={() => setHitPoints(old => old - 1)}
    >
      decrement
    </button>
  </div>
}

const playerStyleClasses = {
  [PlayerStyle.RED]: styles.red,
  [PlayerStyle.BLUE]: styles.blue
}
