import { createContext } from 'react'

export const GameCtx = createContext({
  /**
   * Object which contains current game state. It is updated as the match progresses.
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
