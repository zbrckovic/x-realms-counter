import React, {ButtonHTMLAttributes, FC} from 'react'
import styles from './CombatButton.module.sass'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    combat: number
}

export const CombatButton: FC<Props> = ({className, combat, ...props}) =>
    <button
        className={classNames(styles.root, className)}
        {...props}
    >
        <div className={styles.inner}>
            {combat}
        </div>
    </button>
