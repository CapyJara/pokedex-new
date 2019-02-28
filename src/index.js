import pokedex from '../data/pokedex.js';
import loadPokemon from './pokemon-components.js';
import loadPaging from './paging-component.js';

loadPaging(pokedex.length);
loadPokemon(pokedex);