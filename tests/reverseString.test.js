import { reverseString } from "../scripts/reverseString";

test("reverse foo into oof", () => {
  expect(reverseString("foo")).toBe("oof");
});

test("reverse 12345 as 54321", () => {
  expect(reverseString("12345")).toBe("54321");
});

test("reverse sentence with spaces", () => {
  expect(reverseString("one two three")).toBe("eerht owt eno");
});
