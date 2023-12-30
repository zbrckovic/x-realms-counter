import { CounterMode } from 'model'
import { Game } from 'model/game'
import { GameSetup } from 'model/setup'
import { createContext, SetStateAction } from 'react'

export interface GameCtx {
    readonly game?: Game
    readonly startGame: (setup: GameSetup) => void
    readonly setHitPoints: (playerIndex: number, action: SetStateAction<number>) => void
    readonly finishTurn: () => void
    readonly finishGame: () => void
    readonly setTrade: (action: SetStateAction<number>) => void
    readonly setCombat: (action: SetStateAction<number>) => void
    readonly setTradeCombatInputMode: (mode: CounterMode) => void
}

export const GameCtx = createContext<GameCtx>({
    /**
     * Object which contains the current game state. It is updated as the match progresses.
     */
    game: undefined,
    startGame: () => { console.log('not implemented') },
    setHitPoints: () => { console.log('not implemented') },
    finishTurn: () => { console.log('not implemented') },
    finishGame: () => { console.log('not implemented') },
    setTrade: () => { console.log('not implemented') },
    setCombat: () => { console.log('not implemented') },
    setTradeCombatInputMode: () => { console.log('not implemented') }
})
