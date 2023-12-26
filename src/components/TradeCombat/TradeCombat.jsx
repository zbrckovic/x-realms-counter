import React from 'react'
import classNames from 'classnames'
import styles from './TradeCombat.module.sass'
import { TradeAndCombatAlignment } from './common'

const alignmentClasses = {
  [TradeAndCombatAlignment.LEFT]: styles.left,
  [TradeAndCombatAlignment.RIGHT]: styles.right
}

export const TradeCombat = ({ className, alignment }) => {
  const sideClass = alignmentClasses[alignment]

  return <div className={classNames(styles.root, className)}>
    <button className={classNames(styles.trade, sideClass)}>trade</button>
    <button className={classNames(styles.mode, sideClass)}>mode</button>
    <button className={classNames(styles.combat, sideClass)}>combat</button>
  </div>
}
