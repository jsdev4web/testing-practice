let object = require('./test5.js');

test('create a test file', () => {
    expect(object).toEqual({average: 4, min: 1, max: 8, length: 6})
});


