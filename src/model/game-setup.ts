import { PlayerSetup } from 'model/player-setup'

export interface GameSetup {
    readonly layout: Layout,
    readonly players: ReadonlyArray<PlayerSetup>
}

export const createDuel = (player1: PlayerSetup, player2: PlayerSetup): GameSetup => {
    return { layout: Layout.DUEL, players: [player1, player2] }
}

export enum Layout {
    DUEL = 'DUEL'
}
