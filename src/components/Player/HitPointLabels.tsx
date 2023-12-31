import classNames from 'classnames'
import { HitPointDiffIndicatorPosition } from 'model'
import React, { FC } from 'react'
import { BulkDiffIndicator, BulkDiffIndicatorPurpose } from '../BulkDiffIndicator'
import { PortraitMessage } from '../PortraitMessage'
import styles from './HitPointLabels.module.sass'

const diffIndicatorPositionClasses = {
    [HitPointDiffIndicatorPosition.TOP_LEFT]: styles.topLeft,
    [HitPointDiffIndicatorPosition.TOP_RIGHT]: styles.topRight
}

interface Props {
    className?: string
    prevHitPoints: number
    hitPoints: number
    diffIndicatorPosition: HitPointDiffIndicatorPosition
    turnIndex: number
}

export const HitPointLabels: FC<Props> = ({
                                              className,
                                              prevHitPoints,
                                              hitPoints,
                                              diffIndicatorPosition,
                                              turnIndex
                                          }) => {
    const hitPointsDiff = hitPoints - prevHitPoints

    const increment = Math.max(hitPointsDiff, 0)
    const decrement = Math.min(hitPointsDiff, 0)

    return <>
        <div className={classNames(styles.root, className)}>
            <BulkDiffIndicator
                className={classNames(styles.diff, diffIndicatorPositionClasses[diffIndicatorPosition])}
                value={hitPoints}
                purpose={BulkDiffIndicatorPurpose.HIT_POINTS}
                turnIndex={turnIndex}
            />
            <label
                className={styles.increment}
                style={{ visibility: increment > 0 ? 'visible' : 'hidden' }}
            >
                +{increment}
            </label>
            <label className={styles.hitPoints}>{hitPoints}</label>
            <label
                className={styles.decrement}
                style={{ visibility: decrement < 0 ? 'visible' : 'hidden' }}
            >
                {decrement}
            </label>
        </div>
        <PortraitMessage/>
    </>
}
