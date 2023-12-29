import React, { useMemo } from 'react'
import styles from './BulkDiffIndicator.module.sass'
import { useAccumulatedDifference } from './use-accumulated-difference'
import classNames from 'classnames'

/** @enum */
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

/**
 * Shows how much points the player has added or removed in one go.
 *
 * @param className
 * @param value - Value for which this indicator tracks changes.
 * @param {BulkDiffIndicatorPurpose} purpose
 * @param resetToken - When this value changes, the indicator disappears and resets.
 * @param threshold - How long to wait before indicator disappears and resets.
 */
export const BulkDiffIndicator = ({ className, value, purpose, resetToken, threshold }) => {
  const diff = useAccumulatedDifference(value, resetToken, threshold)

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
