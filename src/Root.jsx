import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Root.module.sass'
import { PlayerStyle } from './player-style'
import { SetupCtx } from './setup-ctx'

export const Root = () => {
  const [setup, setSetup] = useState(() => ({
    players: [
      {
        style: PlayerStyle.RED,
        initHitPoints: 60
      },
      {
        style: PlayerStyle.BLUE,
        initHitPoints: 80
      }
    ]
  }))

  return <div className={styles.root}>
    <SetupCtx.Provider value={setup}>
      <Outlet/>
    </SetupCtx.Provider>
  </div>
}
