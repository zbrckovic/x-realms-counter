// noinspection JSUnusedLocalSymbols

import { createContext } from 'react'

export const GameCtx = createContext({
  /**
   * Object which contains the current game state. It is updated as the match progresses.
   */
  game: undefined,
  /**
   * @param {GameSetup} gameSetup
   */
  startGame: (gameSetup) => {
    console.log('not implemented')
  },
  setHitPoints: () => {
    console.log('not implemented')
  },
  finishTurn: () => {
    console.log('not implemented')
  },
  finishGame: () => {
    console.log('not implemented')
  },
  setTrade: () => {
    console.log('not implemented')
  },
  setCombat: () => {
    console.log('not implemented')
  },
  setTradeCombatInputMode: () => {
    console.log('not implemented')
  }
})
