import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-components.js';
import loadPaging from './paging/paging-component.js';
import pageArray from './paging/page-array.js';

import sortPokemon from './sorting/sort-pokemon.js';
import loadSort from './sorting/load-sort.js';

import filterPokemon from './filter/filter-pokemon.js';
import loadFilter from './filter/load-filter.js';


loadPaging(pokedex.length, pagingOptions => {
    const pagedPokedex = pageArray(pokedex, pagingOptions);
    loadPokemon(pagedPokedex);
});

loadSort(sortChoice => {
    const sortedPokemon = sortPokemon(pokedex, sortChoice);

    loadPaging(sortedPokemon.length, pagingOptions => {
        const pagedPokedex = pageArray(pokedex, pagingOptions);
        loadPokemon(pagedPokedex);
    });
});

loadFilter(filter => {
    const filteredList = filterPokemon(filter, pokedex);

    loadPaging(filteredList.length, pagingOptions => {
        const pagedPokedex = pageArray(filteredList, pagingOptions);
        loadPokemon(pagedPokedex);
    });
});