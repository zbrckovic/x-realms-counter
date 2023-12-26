import React from 'react'
import classNames from 'classnames'
import styles from './TradeCombat.module.sass'

export const TradeAndCombatSide = {
  LEFT: 'LEFT',
  RIGHT: 'RIGHT'
}

const sideClasses = {
  [TradeAndCombatSide.LEFT]: styles.left,
  [TradeAndCombatSide.RIGHT]: styles.right
}

export const TradeCombat = ({ className, side }) => {
  const sideClass = sideClasses[side]

  return <div className={classNames(styles.root, className)}>
    <button className={classNames(styles.trade, sideClass)}>trade</button>
    <button className={classNames(styles.mode, sideClass)}>mode</button>
    <button className={classNames(styles.combat, sideClass)}>combat</button>
  </div>
}
