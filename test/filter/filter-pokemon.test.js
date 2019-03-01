const test = QUnit.test;

QUnit.module('filtering');

import filterPokemon from '../../src/filter/filter-pokemon.js';

const pokedex = [
    { type: 'grass', generation: '1' },
    { type: 'grass', generation: '2' },
    { type: 'water', generation: '1' },
    { type: 'water', generation: '2' },
    { type: 'fire', generation: '1' },
    { type: 'fire', generation: '3' }
];

test('filtering by type grass', assert => {
    // arrange
    const filter = { type: 'grass', generation: '' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type: 'grass', generation: '1' },
        { type: 'grass', generation: '2' }
    ];
    // assert
    assert.deepEqual(result, expected);
});

test('filtering by type fire', assert => {
    // arrange
    const filter = { type: 'fire', generation: '' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type: 'fire', generation: '1' },
        { type: 'fire', generation: '3' }
    ];
    // assert
    assert.deepEqual(result, expected);
});


test('filtering by generation 1', assert => {
    // arrange
    const filter = { type: '', generation: '1' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type: 'grass', generation: '1' },
        { type: 'water', generation: '1' },
        { type: 'fire', generation: '1' }
    ];
    // assert
    assert.deepEqual(result, expected);
});

test('filtering by generation 3', assert => {
    // arrange
    const filter = { type: '', generation: '3' };
    // act
    const result = filterPokemon(filter, pokedex);
    const expected = [
        { type: 'fire', generation: '3' }
    ];
    // assert
    assert.deepEqual(result, expected);
});