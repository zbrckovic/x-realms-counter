import classNames from 'classnames'
import {HitPointDiffIndicatorPosition} from 'model'
import React, {Dispatch, FC, SetStateAction} from 'react'
import {HitPointLabels} from './HitPointLabels'
import styles from './Player.module.sass'

interface Props {
    className?: string
    prevHitPoints: number
    hitPoints: number
    setHitPoints: Dispatch<SetStateAction<number>>
    turnIndex: number
    hitPointDiffIndicatorPosition: HitPointDiffIndicatorPosition
}

export const Player: FC<Props> = ({
                                      className,
                                      prevHitPoints,
                                      hitPoints,
                                      setHitPoints,
                                      turnIndex,
                                      hitPointDiffIndicatorPosition
                                  }) => {
    return <div className={classNames(styles.root, className)}>
        <HitPointLabels
            className={styles.hitPointsLabels}
            prevHitPoints={prevHitPoints}
            hitPoints={hitPoints}
            diffIndicatorPosition={hitPointDiffIndicatorPosition}
            turnIndex={turnIndex}
        />
        <button
            className={styles.incrementButton}
            onClick={() => setHitPoints(old => old + 1)}
        />
        <button
            className={styles.decrementButton}
            onClick={() => setHitPoints(old => old - 1)}
        />
    </div>
}
