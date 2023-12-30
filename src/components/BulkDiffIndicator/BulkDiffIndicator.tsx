import classNames from 'classnames'
import React, {FC, useMemo} from 'react'
import styles from './BulkDiffIndicator.module.sass'
import {useAccumulatedDifference} from './use-accumulated-difference'

export enum BulkDiffIndicatorPurpose {
    TRADE = 'TRADE',
    COMBAT = 'COMBAT',
    HIT_POINTS = 'HIT_POINTS'
}

const purposeClasses = {
    [BulkDiffIndicatorPurpose.TRADE]: styles.trade,
    [BulkDiffIndicatorPurpose.COMBAT]: styles.combat,
    [BulkDiffIndicatorPurpose.HIT_POINTS]: styles.hitPoints
}

interface Props {
    className?: string
    // Value for which this indicator tracks changes.
    value: number
    purpose: BulkDiffIndicatorPurpose
    turnIndex: number
    // How long to wait before indicator disappears and resets.
    threshold?: number
}

// Shows how much points the player has added or removed in one go.
export const BulkDiffIndicator: FC<Props> = ({
                                                 className,
                                                 value,
                                                 purpose,
                                                 turnIndex,
                                                 threshold
                                             }) => {
    const [diff = 0, changeInProgress] = useAccumulatedDifference(value, turnIndex, threshold)

    const text = useMemo(() => {
        if (diff === 0) return ''
        return diff > 0 ? `+${diff}` : `${diff}`
    }, [diff])

    return (
        <label
            className={classNames(
                styles.root,
                className,
                purposeClasses[purpose],
                diff !== undefined
                    ? {
                        [styles.increment]: diff > 0,
                        [styles.decrement]: diff < 0,
                        [styles.isVisible]: changeInProgress
                    }
                    : undefined
            )}
        >
            {text}
        </label>
    )
}
