import PknStats from "./pokemonObjects/PknStats.js";
import Pokemon from "./pokemonObjects/Pokemon.js"

let stats = new PknStats(1, 1, 1, 1, 1, 1, 1)
stats.print()

let pikachu = new Pokemon(stats)

pikachu.pknStats.print()

function turn() {
    pikachu.onAttackEvent()
}

