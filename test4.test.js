let ceasarCipher = require('./test4.js');

test('use ciper on some text', () => {
    expect(ceasarCipher("X?y!Z", 3)).toBe("A?b!C")
});


