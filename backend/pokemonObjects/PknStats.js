import { assertNumber } from '../helpers/typeChecker.js'

//Only keeps track of the stats of a pokemon
class PknStats {
    constructor(level, hp, phyAtk, phyDef, spAtk, spDef, speed) {
        this.level = assertNumber(level)
        this.hp = assertNumber(hp)
        this.phyAtk = assertNumber(phyAtk)
        this.phyDef = assertNumber(phyDef)
        this.spAtk = assertNumber(spAtk)
        this.spDef = assertNumber(spDef)
        this.speed = assertNumber(speed)
    }
    print() {
        console.log(`Level: ${this.level} HP: ${this.hp} Attack: ${this.phyAtk} Defense: ${this.phyDef} Special Attack: ${this.spAtk} Special Defense: ${this.spDef} Speed: ${this.speed}`)
    }
}

export default PknStats