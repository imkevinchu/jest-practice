import { Calculator } from "../scripts/calculator";

describe("add numbers", () => {
  test("add 1 + 2 = 3", () => {
    expect(Calculator.add(1, 2)).toBe(3);
  });

  test("add -3 + 5 = 2", () => {
    expect(Calculator.add(-3, 5)).toBe(2);
  });
});

describe("subtract numbers", () => {
  test("subtract 3 - 2 = 1", () => {
    expect(Calculator.subtract(3, 2)).toBe(1);
  });

  test("subtract -9 - 10 = -19", () => {
    expect(Calculator.subtract(-9, 10)).toBe(-19);
  });
});

describe("multiply numbers", () => {
  test("multiply 2 * 3 = 6", () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test("multiply -3 * -9 = 27", () => {
    expect(Calculator.multiply(-3, -9)).toBe(27);
  });
});

describe("divide numbers", () => {
  test("divide 9 / 3 = 3", () => {
    expect(Calculator.divide(9, 3)).toBe(3);
  });

  test("divide 30 / -10 = -3", () => {
    expect(Calculator.divide(30, -10)).toBe(-3);
  });
});
