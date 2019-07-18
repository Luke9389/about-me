import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;
QUnit.module('Throw Check');

test('rock check', (assert) => {
    const num = 0.2;
    const expected = 'rock';
    let result = getThrowFromNumber(num);

    assert.equal(result, expected);
});

test('paper check', (assert) => {
    const num = 1.1;
    const expected = 'paper';
    let result = getThrowFromNumber(num);

    assert.equal(result, expected);
});

test('scissors check', (assert) => {
    const num = 2.3;
    const expected = 'scissors';
    let result = getThrowFromNumber(num);

    assert.equal(result, expected);
});