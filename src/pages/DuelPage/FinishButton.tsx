import classNames from 'classnames'
import React, { FC, useCallback } from 'react'
import { useLongPress } from 'use-long-press'
import { LongPressCallback } from 'use-long-press/lib/use-long-press.types'

import styles from './FinishButton.module.sass'

interface Props {
    className?: string
    onFinishGame: () => void
    onFinishTurn: () => void
}

export const FinishButton: FC<Props> = ({ className, onFinishGame, onFinishTurn }) => {
    const onLongPress = useCallback(onFinishGame, [onFinishGame])
    const onCancel = useCallback<LongPressCallback>((event: any, { reason }) => {
        if (reason === 'cancelled-by-release') {
            onFinishTurn()
        }
    }, [onFinishTurn])

    const bind = useLongPress(onLongPress, { onCancel, threshold: 2000 })

    return <button className={classNames(styles.root, className)} {...bind()}>
        Finish Turn
    </button>
}
