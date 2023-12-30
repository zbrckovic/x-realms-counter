import React, { useCallback } from 'react'

import styles from './FinishButton.module.sass'
import classNames from 'classnames'
import { useLongPress } from 'use-long-press'

export const FinishButton = ({ className, onFinishGame, onFinishTurn }) => {
  const onLongPress = useCallback(onFinishGame, [onFinishGame])
  const onCancel = useCallback((event, { reason }) => {
    if (reason === 'cancelled-by-release') {
      onFinishTurn()
    }
  }, [onFinishTurn])

  const bind = useLongPress(onLongPress, { onCancel, threshold: 2000 })

  return <button
    className={classNames(styles.root, className)}
    {...bind()}
  >
    Finish Turn
  </button>
}
