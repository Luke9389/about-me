import compareNumbers from '../src/compare-numbers.js';

const test = QUnit.test;

test('test number too low', function(assert) {
    const guess = 2;
    const expected = -1;
    const result = compareNumbers(guess, 5);

    assert.equal(expected, result);
});