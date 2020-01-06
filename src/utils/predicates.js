import { bracketsCodePoint } from "./consts";

export const isLeftBrackets = char => {
  if (char.length !== 1) {
    return false;
  }

  return char.codePointAt(0) === bracketsCodePoint.left;
};

export const isRightBrackets = char => {
  if (char.length !== 1) {
    return false;
  }

  return char.codePointAt(0) === bracketsCodePoint.right;
};
