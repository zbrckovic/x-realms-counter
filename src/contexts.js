import { createContext } from 'react'
import { PlayerStyle } from './player-style'

export const MainCtx = createContext({
  /**
   * Initial setup which is defined before the start of the match.
   */
  setup: {
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
  },
  setSetup: () => {
    console.log('not implemented')
  },

  /**
   * Object which contains current game state. It is updated as match progresses.
   */
  game: undefined,
  startGame: () => {
    console.log('not implemented')
  },
  setHitPoints: () => {
    console.log('not implemented')
  },
  finishTurn: () => {
    console.log('not implemented')
  }
})
