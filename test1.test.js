let capitalize = require('./test1.js');

test('the first letter should be Caps', () => {
    expect(capitalize("hello")).toBe("Hello")
});

