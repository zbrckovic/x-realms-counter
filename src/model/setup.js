export class GameSetup {
  /**
   * @param {PlayerSetup} player1
   * @param {PlayerSetup} player2
   */
  static duel ({ player1, player2 }) {
    return new GameSetup({ layout: Layout.DUEL, players: [player1, player2] })
  }

  layout
  players

  /**
   * @private
   * @param {Object} props
   * @param {Layout} props.layout
   * @param {PlayerSetup[]} props.players
   */
  constructor ({ layout, players }) {
    this.layout = layout
    this.players = players
  }
}

/** @enum */
export const Layout = {
  DUEL: 'DUEL'
}

export class PlayerSetup {
  /** @see constructor */
  static from (props) {
    return new PlayerSetup(props)
  }

  initHitPoints

  /**
   * @private
   * @param {Object} props
   * @param {Number} props.initHitPoints - The number of hit points that the player will have at the
   * start of the game.
   */
  constructor ({ initHitPoints }) {
    this.initHitPoints = initHitPoints
  }
}
