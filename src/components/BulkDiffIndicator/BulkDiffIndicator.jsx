import React, { useMemo } from 'react'
import styles from './BulkDiffIndicator.module.sass'
import { useAccumulatedValue } from './use-accumulated-value-state'
import classNames from 'classnames'

export const BulkDiffIndicatorPurpose = {
  TRADE: 'TRADE',
  COMBAT: 'COMBAT',
  HIT_POINTS: 'HIT_POINTS'
}

const purposeClasses = {
  [BulkDiffIndicatorPurpose.TRADE]: styles.trade,
  [BulkDiffIndicatorPurpose.COMBAT]: styles.combat,
  [BulkDiffIndicatorPurpose.HIT_POINTS]: styles.hitPoints
}

export const BulkDiffIndicator = ({ className, value, purpose, resetToken, threshold }) => {
  const diff = useAccumulatedValue(value, resetToken, threshold)

  const text = useMemo(() => {
    if (diff === undefined) return ''
    if (diff > 0) return `+${diff}`
    return `${diff}`
  }, [diff])

  return (
    <label
      className={classNames(
        styles.root,
        className,
        purposeClasses[purpose],
        diff !== undefined
          ? {
            [styles.increment]: diff > 0,
            [styles.decrement]: diff < 0
          }
          : undefined
      )}
      style={{
        visibility: diff === undefined ? 'hidden' : 'visible'
      }}
    >
      {text}
    </label>
  )
}
