import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-components.js';
import loadPaging from './paging/paging-component.js';
import pageArray from './paging/page-array.js';

import sortPokemon from './sorting/sort-pokemon.js';
import loadSort from './sorting/sort-event.js';

import filterPokemon from './filter/filter-pokemon.js';


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


const filterForm = document.getElementById('filter-form');

function loadFilter(callback) {

    filterForm.addEventListener('submit', event => {
        event.preventDefault();
        
        const formDaddy = new FormData(filterForm);
        
        const filter = {
            type: formDaddy.get('type-filter'),
            generation: formDaddy.get('generation-filter')
        };
        
        callback(filter);
    });
}

loadFilter(filter => {
    const filteredList = filterPokemon(filter, pokedex);
    loadPaging(filteredList.length, pagingOptions => {
        const pagedPokedex = pageArray(pokedex, pagingOptions);
        loadPokemon(pagedPokedex);
    });
});