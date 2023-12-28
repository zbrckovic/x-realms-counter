import React from 'react'
import styles from './Player.module.sass'
import classNames from 'classnames'
import { HitPointLabels } from './HitPointLabels'

export const Player = ({
  className,
  prevHitPoints,
  hitPoints,
  hasTurn,
  setHitPoints,
  playerAtTurn,
  team
}) => {
  return <div
    className={classNames(
      styles.root,
      { [styles.hasTurn]: hasTurn },
      className
    )}
  >
    <HitPointLabels
      className={styles.hitPointsLabels}
      prevHitPoints={prevHitPoints}
      hitPoints={hitPoints}
      hasTurn={hasTurn}
      playerAtTurn={playerAtTurn}
      team={team}
    />
    <button
      className={styles.incrementButton}
      onClick={() => setHitPoints(old => old + 1)}
    />
    <button
      className={styles.decrementButton}
      onClick={() => setHitPoints(old => old - 1)}
    />
  </div>
}
