const reverseString = require('./reverese_string');

test("reverse string function exists", () => {
    expect(reverseString).toBeDefined();
});


test("reverse string", () => {
    expect(reverseString('Hello')).toEqual('olleh');
});