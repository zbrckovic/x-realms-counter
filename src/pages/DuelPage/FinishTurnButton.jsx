import React from 'react'

import styles from './FinishTurnButton.module.sass'
import classNames from 'classnames'

export const FinishTurnButton = ({ className, onClick }) =>
  <button
    className={classNames(styles.root, className)}
    onClick={onClick}
  >
    Finish Turn
  </button>
