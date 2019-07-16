import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('testing YES', function(assert) {
    const text = 'YES';
    const expected = true;
    const result = isYes(text);

    assert.equal(result, expected);
});

test('testing Yes', function(assert) {
    const text = 'Yes';
    const expected = true;
    const result = isYes(text);

    assert.equal(result, expected);
});

test('testing y', function(assert) {
    const text = 'y';
    const expected = true;
    const result = isYes(text);

    assert.equal(result, expected);
});

test('testing yes', function(assert) {
    const text = 'yes';
    const expected = true;
    const result = isYes(text);

    assert.equal(result, expected);
});

test('testing frisbee is no', function(assert) {
    const text = 'frisbee';
    const expected = 'error';
    const result = isYes(text);

    assert.equal(result, expected);
});

test('testing empty string', function(assert) {
    const text = '';
    const expected = 'empty';
    const result = isYes(text);

    assert.equal(result, expected);
});