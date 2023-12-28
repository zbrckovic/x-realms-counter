import React from 'react'
import styles from './PortraitMessage.module.sass'

export const PortraitMessage = () => (
  <div className={styles.root}>
    <p>
      This application is not intended to work in portrait mode. Turn it sideways!
    </p>
  </div>
)
