import isYes from '../src/is-yes.js';

const test = QUnit.test;

test('testing YES', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'YES';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('testing Yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'Yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('testing y', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'y';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('testing yes', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    const expected = true;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});

test('testing frisbee is no', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'frisbee';
    const expected = false;

    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);

    //Assert
    assert.equal(result, expected);
});