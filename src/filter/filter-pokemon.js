export default function filterPokemon(filter, pokedex) {
    const result = pokedex.filter(pokemon => {
        const typeFilter = !filter.type_1 || pokemon.type_1 === filter.type_1;
        return typeFilter;
    });
    return result;
}