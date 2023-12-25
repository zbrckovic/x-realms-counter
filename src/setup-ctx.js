import { createContext } from 'react'
import { PlayerStyle } from './player-style'

export const SetupCtx = createContext({
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
})
