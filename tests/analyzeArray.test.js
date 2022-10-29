import { analyzeArray } from "../scripts/analyzeArray";

describe("return object with statistics", () => {
  let object;
  beforeAll(() => {
    object = analyzeArray([1, 8, 3, 4, 2, 6]);
  });

  test("average is 4", () => {
    expect(object.average).toBe(4);
  });

  test("min is 1", () => {
    expect(object.min).toBe(1);
  });

  test("max is 8", () => {
    expect(object.max).toBe(8);
  });

  test("length is 6", () => {
    expect(object.length).toBe(6);
  });
});
