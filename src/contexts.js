import { createContext } from 'react'
import { PlayerStyle } from './player-style'

export const MainCtx = createContext({
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
  game: undefined,
  setGame: () => {
    console.log('not implemented')
  },
  setCurrentTurn: () => {
    console.log('not implemented')
  },
  tempTurnState: undefined,
  setTempTurnState: () => {
    console.log('not implemented')
  },
  finishTurn: () => {
    console.log('not implemented')
  }
})
