import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('test number too low', function(assert) {
    const guess = 2;
    const expected = -1;
    const result = compareNumbers(guess, 5);

    assert.equal(expected, result);
});

test('test number too high', function(assert) {
    const guess = 8;
    const expected = 1;
    const result = compareNumbers(guess, 5);

    assert.equal(expected, result);
});

test('test number correct', function(assert) {
    const guess = 5;
    const expected = 0;
    const result = compareNumbers(guess, 5);

    assert.equal(expected, result);
});