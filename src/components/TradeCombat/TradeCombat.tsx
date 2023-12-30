import React, { useCallback } from 'react'
import classNames from 'classnames'
import styles from './TradeCombat.module.sass'
import { TradeAndCombatAlignment } from './common'
import { CounterMode } from '../../model'
import { BulkDiffIndicator, BulkDiffIndicatorPurpose } from '../BulkDiffIndicator'

const alignmentClasses = {
  [TradeAndCombatAlignment.LEFT]: styles.left,
  [TradeAndCombatAlignment.RIGHT]: styles.right
}

export const TradeCombat = ({
  className,
  alignment,
  trade,
  combat,
  inputMode,
  setTrade,
  setCombat,
  setInputMode,
  turnIndex,
  enabled
}) => {
  const sideClass = alignmentClasses[alignment]

  const updateValue = useCallback(
    value => updateValueWithInputMode(inputMode, value),
    [updateValueWithInputMode, inputMode]
  )

  if (!enabled) return null

  return <div className={classNames(styles.root, className)}>
    <div className={classNames(styles.trade, sideClass)}>
      <BulkDiffIndicator
        className={styles.diff}
        value={trade}
        purpose={BulkDiffIndicatorPurpose.TRADE}
        turnIndex={turnIndex}
      />
      <button
        onClick={() => setTrade(updateValue)}
      >
        {trade}
      </button>
    </div>
    <div className={classNames(styles.inputMode, sideClass)}>
      <button
        onClick={() => {
          setInputMode(old => {
            switch (old) {
              case CounterMode.INCREMENT:
                return CounterMode.DECREMENT
              case CounterMode.DECREMENT:
                return CounterMode.INCREMENT
            }
          })
        }}
      >
        {inputModeSymbols[inputMode]}
      </button>
    </div>
    <div className={classNames(styles.combat, sideClass)}>
      <BulkDiffIndicator
        className={styles.diff}
        value={combat}
        purpose={BulkDiffIndicatorPurpose.COMBAT}
        turnIndex={turnIndex}
      />
      <button
        onClick={() => setCombat(updateValue)}
      >
        {combat}
      </button>
    </div>
  </div>
}

const inputModeSymbols = {
  [CounterMode.INCREMENT]: '+',
  [CounterMode.DECREMENT]: '-'
}

function updateValueWithInputMode (inputMode, value) {
  switch (inputMode) {
    case CounterMode.INCREMENT:
      return value + 1
    case CounterMode.DECREMENT:
      return Math.max(0, value - 1)
  }
}
