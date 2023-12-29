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
  turnIndex,
  hitPointDiffIndicatorPosition
}) => {
  return <div
    className={classNames(styles.root, className)}
  >
    <HitPointLabels
      className={styles.hitPointsLabels}
      prevHitPoints={prevHitPoints}
      hitPoints={hitPoints}
      hasTurn={hasTurn}
      diffIndicatorPosition={hitPointDiffIndicatorPosition}
      turnIndex={turnIndex}
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
