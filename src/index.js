import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-components.js';
import loadPaging from './paging/paging-component.js';
import pageArray from './paging/page-array.js';

import sortPokemon from './sorting/sort-pokemon.js';
import loadSort from './sorting/sort-event.js';


loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokemon(pagedPokedex);
});



loadSort((sortChoice) => {
    const sortedPokemon = sortPokemon(pokedex, sortChoice);
    loadPaging(sortedPokemon.length, pagingOptions => {
        const pagedPokedex = pageArray(pokedex, pagingOptions);
        loadPokemon(pagedPokedex);
    });
});