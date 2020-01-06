import { bracketsCodePoint } from "./consts";

export const isLeftBrackets = char =>
  char.codePointAt(0) === bracketsCodePoint.left;
export const isRightBrackets = char =>
  char.codePointAt(0) === bracketsCodePoint.right;
