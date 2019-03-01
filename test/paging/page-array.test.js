import pageArray from '../../src/paging/page-array.js';
const test = QUnit.test;

QUnit.module('paging');

const pages = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten'
];


test('page 1 of 4 per page', assert => {
    // arrange
    const pagingOptions = {
        page: 1,
        perPage: 4
    };

    // act
    const result = pageArray(pages, pagingOptions);

    // assert
    assert.deepEqual(result, ['one', 'two', 'three', 'four']);
});

test('page 2 of 3 per page', assert => {
    // arrange
    const pagingOptions = {
        page: 2,
        perPage: 3
    };

    // act
    const result = pageArray(pages, pagingOptions);

    // assert
    assert.deepEqual(result, ['four', 'five', 'six']);
});

test('page 3 of 4 per page', assert => {
    // arrange
    const pagingOptions = {
        page: 3,
        perPage: 4
    };

    // act
    const result = pageArray(pages, pagingOptions);

    // assert
    assert.deepEqual(result, ['nine', 'ten']);
});