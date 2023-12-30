import React, {FC} from 'react'
import styles from './PortraitMessage.module.sass'

export const PortraitMessage: FC = () => (
    <div className={styles.root}>
        <p>
            This page is not intended to work in portrait mode. Turn it sideways!
        </p>
    </div>
)
