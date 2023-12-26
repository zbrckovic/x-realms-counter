import React from 'react'
import classNames from 'classnames'
import styles from './TradeCombat.module.sass'

export const TradeAndCombatSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

export const TradeCombat = ({ className, side }) => {
  return <div className={classNames(styles.root, className)}>Temp Turn State</div>
}
