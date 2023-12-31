import React, { FC } from 'react'
import { config } from 'config'
import classNames from 'classnames'
import styles from './Version.module.sass'

interface Props {
    className?: string
}

export const Version: FC<Props> = ({ className }) => {
    return <div className={classNames(styles.root, className)}>
        {config.version}
    </div>
}
