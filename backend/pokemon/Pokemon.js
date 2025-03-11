import { assertObject } from "../helpers/typeChecker.js"

import PknStats from "./PknStats.js";
import Ability from "./Ability.js";

class Pokemon {
    constructor(pknStats, ability) {
        this.pknStats = assertObject(pknStats, PknStats)
        this.ability = assertObject(ability, Ability)
    }

    onBattleStartEvent(other) {
        this.ability.onBattleStart(this, other)
    }

    onAttackEvent(other) {
        this.ability.onAttack(this, other)
    }

    onHitEvent(other) {
        this.ability.onHit(this, other)
    }

    onFaintedEvent(other) {
        this.ability.onFainted(this, other)
    }
}

export default Pokemon