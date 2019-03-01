const test = QUnit.test;

QUnit.module('filtering');

import filterPokemon from '../../src/filter/filter-pokemon.js';

const pokedex = [
    { type_1: 'grass', generation: '1' },
    { type_1: 'grass', generation: '2' },
    { type_1: 'water', generation: '1' },
    { type_1: 'water', generation: '2' },
    { type_1: 'fire', generation: '1' },
    { type_1: 'fire', generation: '3' }
];

test('filtering by type_1 grass', assert => {
    // arrange
    const filter = { type_1: 'grass', generation: '' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type_1: 'grass', generation: '1' },
        { type_1: 'grass', generation: '2' }
    ];
    // assert
    assert.deepEqual(result, expected);
});

test('filtering by type_1 fire', assert => {
    // arrange
    const filter = { type_1: 'fire', generation: '' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type_1: 'fire', generation: '1' },
        { type_1: 'fire', generation: '3' }
    ];
    // assert
    assert.deepEqual(result, expected);
});


// test('filtering by generation 1', assert => {
//     // arrange
//     const filter = { type_1: '', generation: '1' };
//     // act
//     const result = filterPokemon(filter, pokedex);
//     const expected = [
//         { type_1: 'grass', generation: '1' },
//         { type_1: 'water', generation: '1' },
//         { type_1: 'fire', generation: '1' }
//     ];
//     // assert
//     assert.deepEqual(result, expected);
// });

// test('filtering by generation 3', assert => {
//     // arrange
//     const filter = { type_1: '', generation: '3' };
//     // act
//     const result = filterPokemon(filter, pokedex);
//     const expected = [
//         { type_1: 'fire', generation: '3' }
//     ];
//     // assert
//     assert.deepEqual(result, expected);
// });