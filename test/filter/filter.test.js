const test = QUnit.test;

QUnit.module('filtering');

const pokedex = [
    { type: 'grass', generation: '1' },
    { type: 'grass', generation: '2' },
    { type: 'water', generation: '1' },
    { type: 'water', generation: '2' },
    { type: 'fire', generation: '1' },
    { type: 'fire', generation: '3' }
];

function sortByAttack(filter, pokedex) {
    const result = pokedex.filter(pokemon => {
        const typeFilter = !filter.type || pokemon.type === filter.type;
        const generationFilter = !filter.generation || pokemon.generation === filter.generation;
        return typeFilter && generationFilter;
    });
    return result;
}

test('filtering by type grass', assert => {
    // arrange
    const filter = { type: 'grass', generation: '' };
    // act
    const result = sortByAttack(filter, pokedex);
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
    const result = sortByAttack(filter, pokedex);
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
    const result = sortByAttack(filter, pokedex);
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
    const result = sortByAttack(filter, pokedex);
    const expected = [
        { type: 'fire', generation: '3' }
    ];
    // assert
    assert.deepEqual(result, expected);
});