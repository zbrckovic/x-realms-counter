import classNames from 'classnames'
import { CounterMode } from 'model'
import React, { Dispatch, FC, SetStateAction, useCallback } from 'react'
import { BulkDiffIndicator, BulkDiffIndicatorPurpose } from '../BulkDiffIndicator'
import { TradeAndCombatAlignment } from './common'
import styles from './TradeCombat.module.sass'
import { TradeButton } from 'components/TradeCombat/TradeButton'
import { CombatButton } from 'components/TradeCombat/CombatButton'

const alignmentClasses = {
    [TradeAndCombatAlignment.LEFT]: styles.left,
    [TradeAndCombatAlignment.RIGHT]: styles.right
}

interface Props {
    className?: string
    alignment: TradeAndCombatAlignment
    trade: number
    combat: number
    inputMode: CounterMode
    setTrade: Dispatch<SetStateAction<number>>
    setCombat: Dispatch<SetStateAction<number>>
    setInputMode: Dispatch<SetStateAction<CounterMode>>
    turnIndex: number
    enabled: boolean
}

export const TradeCombat: FC<Props> = ({
                                           className,
                                           alignment,
                                           trade,
                                           combat,
                                           inputMode,
                                           setTrade,
                                           setCombat,
                                           setInputMode,
                                           turnIndex,
                                           enabled
                                       }) => {
    const sideClass = alignmentClasses[alignment]

    const updateValue = useCallback(
        (value: number) => updateValueWithInputMode(inputMode, value),
        [updateValueWithInputMode, inputMode]
    )

    if (!enabled) return null

    return <div className={classNames(styles.root, className)}>
        <div className={classNames(styles.trade, sideClass)}>
            <BulkDiffIndicator
                className={styles.diff}
                value={trade}
                purpose={BulkDiffIndicatorPurpose.TRADE}
                turnIndex={turnIndex}
            />
            <TradeButton
                trade={trade}
                onClick={() => setTrade(updateValue)}
            />
        </div>
        <div className={classNames(styles.inputMode, sideClass)}>
            <button
                onClick={() => {
                    setInputMode(old => {
                        switch (old) {
                            case CounterMode.INCREMENT:
                                return CounterMode.DECREMENT
                            case CounterMode.DECREMENT:
                                return CounterMode.INCREMENT
                        }
                    })
                }}
            >
                {inputModeSymbols[inputMode]}
            </button>
        </div>
        <div className={classNames(styles.combat, sideClass)}>
            <BulkDiffIndicator
                className={styles.diff}
                value={combat}
                purpose={BulkDiffIndicatorPurpose.COMBAT}
                turnIndex={turnIndex}
            />
            <CombatButton
                onClick={() => setCombat(updateValue)}
                combat={combat}
            />
        </div>
    </div>
}

const inputModeSymbols = {
    [CounterMode.INCREMENT]: '+',
    [CounterMode.DECREMENT]: '-'
}

function updateValueWithInputMode(inputMode: CounterMode, value: number) {
    switch (inputMode) {
        case CounterMode.INCREMENT:
            return value + 1
        case CounterMode.DECREMENT:
            return Math.max(0, value - 1)
    }
}
