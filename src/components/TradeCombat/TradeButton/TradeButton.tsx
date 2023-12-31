import React, { ButtonHTMLAttributes, FC } from 'react'
import styles from './TradeButton.module.sass'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    trade: number
}

export const TradeButton: FC<Props> = ({ className, trade, ...props }) =>
    <button
        className={classNames(styles.root, className)}
        {...props}
    >
        {trade}
    </button>
