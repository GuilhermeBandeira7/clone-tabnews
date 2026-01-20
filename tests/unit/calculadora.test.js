const calculator = require("../../models/calculadora");

test("Expect 1 + 1 to be 2", () => {
  const result = calculator.sum(1, 1);
  expect(result).toBe(2);
});

test("Expect Error", () => {
  expect(() => calculator.sum("a", "b")).toThrow(Error);
});
