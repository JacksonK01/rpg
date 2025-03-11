import BattleManager from "./BattleManager"

//Stores the pokemon and a battle manager
class GameEngine {
    constructor() {
        this.battleManager = new BattleManager()

        this.poke1 = undefined
        this.poke2 = undefined
    }
}