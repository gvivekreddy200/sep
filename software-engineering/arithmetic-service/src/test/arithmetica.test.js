const { add } = require('../arithmetica');

test('add 2 + 3 equals to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('add 200000000009999 + 300000000000000 equals to 500000000009999', () => {
    expect(add(200000000009999, 300000000000000)).toBe(500000000009999);
});

test('add 0 + 0 equals to 0', () => {
    expect(add(0, 0)).toBe(0);
});