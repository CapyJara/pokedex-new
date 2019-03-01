const test = QUnit.test;

import sortPokemon from '../../src/sorting/sort-pokemon.js';

QUnit.module('sorting');

const poxedex = [
    { id: 2, height: 70, hp: 100 },
    { id: 15, height: 50, hp: 80 },
    { id: 8, height: 100, hp: 40 }
];

test('sorting by id', assert => {
    // arrange 
    const sortChoice = { property: 'id' };
    // act
    const results = sortPokemon(poxedex, sortChoice);
    // assert
    assert.deepEqual(results, [
        { id: 2, height: 70, hp: 100 },
        { id: 8, height: 100, hp: 40 },
        { id: 15, height: 50, hp: 80 }
    ]);
});

test('sorting by height', assert => {
    // arrange 
    const sortChoice = { property: 'height' };
    // act
    const results = sortPokemon(poxedex, sortChoice);
    // assert
    assert.deepEqual(results, [
        { id: 15, height: 50, hp: 80 },
        { id: 2, height: 70, hp: 100 },
        { id: 8, height: 100, hp: 40 }
    ]);
});

test('sorting by hp', assert => {
    // arrange 
    const sortChoice = { property: 'hp' };
    // act
    const results = sortPokemon(poxedex, sortChoice);
    // assert
    assert.deepEqual(results, [
        { id: 8, height: 100, hp: 40 },
        { id: 15, height: 50, hp: 80 },
        { id: 2, height: 70, hp: 100 }
    ]);
});