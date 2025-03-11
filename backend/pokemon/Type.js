import { assertString, assertArray } from "../helpers/typeChecker.js"

let normal = 'Normal'
let fire = 'Fire'
let grass = 'Grass'
let water = 'Water'
let electric = 'Electric'
let ice = 'Ice'
let fighting = 'Fighting'
let poison = 'Poison'
let ground = 'Ground'
let flying = 'Flying'
let psychic = 'Psychic'
let bug = 'Bug'
let rock = 'Rock'
let ghost = 'Ghost'
let dragon = 'Dragon'
let dark = 'Dark'
let steel = 'Steel'
let fairy = 'Fairy'

//Basically a C based Enum
class Type {

    static FIRE = new Type(fire, {grass, ice, bug, steel}, {water})
    constructor(name, strong, weakness) {
        this.name = assertString(name)

        this.strong = assertArray(strong)
        this.weakness = assertArray(weakness)
    }

}

export default Type