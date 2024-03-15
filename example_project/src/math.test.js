
// Imports from module.js
const { addition, subtraction, division, multiplication } = require('./math');

// Testings
test("adds 1 + 2 to equal 3", () => {
    expect(addition(1, 2)).toBe(3);
});

test("subtracts 3 - 2 to equal 1", () => {
    expect(subtraction(3, 2)).toBe(1);
});

test("divides 6 / 3 to equal 2", () => {
    expect(division(6, 3)).toBe(2);
});

test("multiplies 2 * 3 to equal 6", () => {
    expect(multiplication(2, 3)).toBe(6);
});
