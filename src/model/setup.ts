export interface GameSetup {
    readonly layout: Layout,
    readonly players: ReadonlyArray<PlayerSetup>
}

export const GameSetup = {
    duel(player1: PlayerSetup, player2: PlayerSetup): GameSetup {
        return {layout: Layout.DUEL, players: [player1, player2]}
    }
}

export enum Layout {
    DUEL = 'DUEL'
}

export const PlayerSetup = {
    /**
     * @param initHitPoints - The number of hit points that the player will have at the
     * start of the game.
     */
    from(initHitPoints: number): PlayerSetup {
        return {initHitPoints}
    }
}

export interface PlayerSetup {
    readonly initHitPoints: number
}
