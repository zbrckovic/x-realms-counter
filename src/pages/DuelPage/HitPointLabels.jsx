import React from 'react'
import styles from './HitPointLabels.module.sass'
import classNames from 'classnames'

export const HitPointLabels = ({ className, prevHitPoints, hitPoints }) => {
  const hitPointsDiff = hitPoints - prevHitPoints

  const increment = Math.max(hitPointsDiff, 0)
  const decrement = Math.min(hitPointsDiff, 0)

  return <div className={classNames(styles.root, className)}>
    <label
      className={styles.increment}
      style={{ visibility: increment > 0 ? 'visible' : 'hidden' }}
    >
      +{increment}
    </label>
    <label className={styles.hitPoints}>{hitPoints}</label>
    <label
      className={styles.decrement}
      style={{ visibility: decrement < 0 ? 'visible' : 'hidden' }}
    >
      {decrement}
    </label>
  </div>
}
