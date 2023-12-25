import React from 'react'
import styles from './Player.module.sass'
import classNames from 'classnames'
import { PlayerStyle } from '../../player-style'

export const Player = ({ className, hitPoints, playerStyle }) => {
  return <div
    className={classNames(styles.root, playerStyleClasses[playerStyle], className)}>{hitPoints}</div>
}

const playerStyleClasses = {
  [PlayerStyle.RED]: styles.red,
  [PlayerStyle.BLUE]: styles.blue
}
