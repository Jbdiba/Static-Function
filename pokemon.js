    class Pokemon{
        static pokemons = []
        constructor(name, number, type, hp) {
            this.name = name
            this.number = number
            this.type = type
            this.hp = hp
        }
            static nameIsString(pokemon){
                return typeof pokemon.name === "string"
            }
            static numberIsTypeNumber(pokemon){
                return typeof pokemon.number === "number"
        }
            static isValidType(pokemon) {
            const elements = ["animal","electric","fire","water"]
                return elements.includes(pokemon.type)
          }
            static isValidHp(pokemon) {
              return typeof pokemon.hp >= 0 && pokemon.hp >=99
          }
            static isValidPokemon(pokemon) {
                return pokemon.isValidPokemon(pokemon.name) && pokemon.isValidPokemon(pokemon.number) && pokemon.isValidPokemon(pokemon.type) && pokemon.isValidPokemon(pokemon.hp)
          }
        }
        let pikachu = new Pokemon ("pika",3,"Animal",8)
        console.log(pikachu)
        Pokemon.nameIsString("pikachu")
        console.log(Pokemon.nameIsString(pikachu))