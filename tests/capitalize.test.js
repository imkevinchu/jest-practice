import { capitalize } from "../scripts/capitalize";

test("capitalize first letter of word", () => {
  expect(capitalize("foo")[0]).toMatch(/^[A-Z]*$/);
});

test("capitalize first letter of sentence", () => {
  expect(capitalize("one two three")[0]).toMatch(/^[A-Z]*$/);
});
