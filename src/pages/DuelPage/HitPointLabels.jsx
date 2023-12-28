import React from 'react'
import styles from './HitPointLabels.module.sass'
import classNames from 'classnames'
import { PortraitMessage } from '../../components/PortraitMessage'
import { BulkDiffIndicator } from '../../components/BulkDiffIndicator'
import { BulkDiffIndicatorPurpose } from '../../components/BulkDiffIndicator/BulkDiffIndicator'
import { Team } from '../../model'

const teamClasses = {
  [Team.LEFT]: styles.left,
  [Team.RIGHT]: styles.right
}

export const HitPointLabels = ({ className, prevHitPoints, hitPoints, playerAtTurn, team }) => {
  const hitPointsDiff = hitPoints - prevHitPoints

  const increment = Math.max(hitPointsDiff, 0)
  const decrement = Math.min(hitPointsDiff, 0)

  return <>
    <div className={classNames(styles.root, className)}>
      <BulkDiffIndicator
        className={classNames(styles.diff, teamClasses[team])}
        value={hitPoints}
        purpose={BulkDiffIndicatorPurpose.HIT_POINTS}
        resetToken={playerAtTurn}
      />
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
    <PortraitMessage/>
  </>
}
