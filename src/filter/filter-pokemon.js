export default function filterPokemon(filter, pokedex) {
    const result = pokedex.filter(pokemon => {
        const typeFilter = !filter.type || pokemon.type === filter.type;
        const generationFilter = !filter.generation || pokemon.generation === filter.generation;
        return typeFilter && generationFilter;
    });
    return result;
}