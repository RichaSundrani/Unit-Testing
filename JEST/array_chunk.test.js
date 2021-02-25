const chunkedArray = require('./array_chunk');

test('Chunk Array function exists', () => {
    expect(chunkedArray).toBeDefined();
});

test('Chunk thhe array of length 10 into length of 2', () => {
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const result = [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]];
    const chunked = chunkedArray(nums, 2);
    expect(chunked).toEqual(result);
});