import { CounterMode } from 'model/index'
import { GameSetup } from 'model/game-setup'

export interface Game {
    setup: GameSetup,
    tradeCombat: TradeCombat,
    turns: ReadonlyArray<Turn>
}

export interface Turn {
    readonly playerIndex: number,
    readonly hitPoints: ReadonlyArray<number>
}

export interface TradeCombat {
    readonly inputMode: CounterMode,
    readonly trade: number,
    readonly combat: number
}
