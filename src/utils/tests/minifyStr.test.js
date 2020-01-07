import { minifyStr } from "./../func-utils";

const testMap = new Map([
  ["123", "123"],
  ["1 2 3", "123"],
  ["   222     ", "222"],
  ["___2___", "___2___"],
  [" ~ ~ ~ + 1 1 1 ", "~~~+111"]
]);

describe("minifyStr function", () => {
  testMap.forEach((expectedResult, value) => {
    test(`value: ${value}, expect: ${expectedResult}`, () => {
      expect(minifyStr(value)).toEqual(expectedResult);
    });
  });
});
