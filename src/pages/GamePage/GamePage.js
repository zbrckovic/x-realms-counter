import React, { useContext, useState } from 'react'
import { Player } from './Player'
import styles from './GamePage.module.sass'
import { SetupCtx } from '../../setup-ctx'

export const GamePage = () => {
  const { players } = useContext(SetupCtx)
  const [hitPoints] = useState(() => players.map(player => player.initHitPoints))

  return <div className={styles.root}>
    {
      players.map((player, i) => (
        <Player
          key={i}
          playerStyle={player.style}
          className={styles.player}
          hitPoints={hitPoints[i]}
        />
      ))
    }
  </div>
}
