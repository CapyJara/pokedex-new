import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-components.js';
import loadPaging from './paging-component.js';
import pageArray from './page-array.js';

loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokemon(pagedPokedex);
});