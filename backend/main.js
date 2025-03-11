import PknStats from "./pokemon/PknStats.js";
import Pokemon from "./pokemon/Pokemon.js"

let stats = new PknStats(1, 1, 1, 1, 1, 1, 1)
stats.print()

let pikachu = new Pokemon(stats)

pikachu.pknStats.print()

function turn() {
    pikachu.onAttackEvent()
}

