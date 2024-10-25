let myOject = require('./test4.js');

test('use ciper on some text', () => {
    expect(myOject.ceasarCiper("word")).toBe("adpfonj")
});