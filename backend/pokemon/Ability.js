import { assertFunction, assertObject } from "../helpers/typeChecker.js";
import Pokemon from "./Pokemon.js";

class Ability {
    constructor(battleStartsHandler, onAttackHandler, onHitHandler, onFaintedHandler) {
        this.battleStartsHandler = assertFunction(battleStartsHandler);
        this.onAttackHandler = assertFunction(onAttackHandler);
        this.onHitHandler = assertFunction(onHitHandler);
        this.onFaintedHandler = assertFunction(onFaintedHandler);
    }

    onBattleStart(owner, other) {
        assertObject(owner, Pokemon)
        assertObject(other, Pokemon)
        this.battleStartsHandler(owner, other)
    }

    onAttack(owner, other) {
        assertObject(owner, Pokemon)
        assertObject(other, Pokemon)
        this.onAttackHandler(owner, other)
    }

    onHit(owner, other) {
        assertObject(owner, Pokemon)
        assertObject(other, Pokemon)
        this.onHitHandler(owner, other)
    }

    onFainted(owner, other) {
        assertObject(owner, Pokemon)
        assertObject(other, Pokemon)
        this.onFaintedHandler(owner, other)
    }
}

export default Ability