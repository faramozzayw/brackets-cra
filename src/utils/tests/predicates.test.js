import { isLeftBrackets, isRightBrackets } from "./../predicates";

const brackets = {
  left: "(",
  right: ")"
};
const testFailedChar = ["n", "1", "((", "))"];

describe("isLeftBrackets function", () => {
  test(`'${brackets.left}' is left brackets`, () => {
    expect(isLeftBrackets(brackets.left)).toBeTruthy();
  });

  test(`'${brackets.right}' isn't left brackets`, () => {
    expect(isLeftBrackets(brackets.right)).toBeFalsy();
  });

  for (const char of testFailedChar) {
    test(`'${char}' isn't left brackets`, () => {
      expect(isLeftBrackets(char)).toBeFalsy();
    });
  }
});

describe("isRightBrackets function", () => {
  test(`'${brackets.right}' is right brackets`, () => {
    expect(isRightBrackets(brackets.right)).toBeTruthy();
  });

  test(`'${brackets.left}' isn't right brackets`, () => {
    expect(isRightBrackets(brackets.left)).toBeFalsy();
  });

  for (const char of testFailedChar) {
    test(`'${char}' isn't left brackets`, () => {
      expect(isLeftBrackets(char)).toBeFalsy();
    });
  }
});
