export default function sortPokemon(pokedex, sortChoice) {
    const property = sortChoice.property.split('-');

    if(property[1] === 'low') {
        return pokedex.sort((a, b) => {
            return a[property[0]] - b[property[0]];
        });
    } else {
        return pokedex.sort((a, b) => {
            return a[property] - b[property];
        });
    }
}