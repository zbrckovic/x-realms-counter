export const GameSetup = {
  /**
   * @param {PlayerSetup} player1
   * @param {PlayerSetup} player2
   */
  duel (player1, player2) {
    return { layout: Layout.DUEL, players: [player1, player2] }
  }
}

/** @enum */
export const Layout = {
  DUEL: 'DUEL'
}

export const PlayerSetup = {
  /**
   * @param {Number} initHitPoints - The number of hit points that the player will have at the
   * start of the game.
   */
  from (initHitPoints) {
    return { initHitPoints }
  }
}
