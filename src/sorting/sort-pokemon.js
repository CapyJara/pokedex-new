export default function sortPokemon(pokedex, sortChoice) {
    const property = sortChoice.property;

    return pokedex.sort((a, b) => {
        if(a[property] === b[property]) {
            return 0;
        }
        if(a[property] > b[property]) {
            return -1;
        }
        return 1;
    });
}