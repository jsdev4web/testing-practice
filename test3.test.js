let myOject = require('./test3.js');

test('add 2 numbers', () => {
    expect(myOject.add(1, 2)).toEqual(3)
});


test('sub 2 numbers', () => {
    expect(myOject.subtract(4, 2)).toEqual(2)
});


test('divide 2 numbers', () => {
    expect(myOject.divide(4, 2)).toEqual(2)
});

test('multiply 2 numbers', () => {
    expect(myOject.multiply(4, 2)).toEqual(8)
});