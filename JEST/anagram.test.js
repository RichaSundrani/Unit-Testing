const isAnagram = require('./anagram');

test("anagram function exists", () => {
    expect(typeof (isAnagram)).toEqual("function");
});

test("cinema is anagram for iceman", () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test("Dormitory is anagram for dirty room", () => {
    expect(isAnagram('Dormitory', 'dirty room')).toBeTruthy();
});

test("Hello is not an anagram of Aloha", () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
});