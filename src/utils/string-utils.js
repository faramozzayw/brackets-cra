import { /* left, */ right, space } from "./consts.js";
import Stack from "./Stack.js";

const brackets = {
  left: "(".codePointAt(0),
  right: ")".codePointAt(0)
};

export const minifyStr = str =>
  `${[...str].filter(char => char.codePointAt(0) !== space).join("")}`;

export const strToCharCodes = str =>
  Array.from([...str].map(char => char.codePointAt(0)));

export const isLeftBrackets = char => char.codePointAt(0) === brackets.left;
export const isRightBrackets = char => char.codePointAt(0) === brackets.right;

export const analyzer = str => {
  const generResult = (status, error) => ({
    status,
    error
  });

  const brackets = {
    left: "(",
    right: ")"
  };

  let strStack = new Stack([...str].reverse(), right);
  let tmpStack = new Stack();

  let emptyBrackets = true;
  let index = 1;

  for (let char of strStack) {
    let ch = strStack.pop();

    if (char === brackets.left) {
      tmpStack.push(ch);
    } else if (char === brackets.right) {
      if (tmpStack.empty()) {
        return generResult(false, {
          text: `Unclosed at ${index}`,
          index
        });
      }

      if (emptyBrackets) {
        return generResult(false, {
          text: `Empty at ${index}`,
          index
        });
      }

      tmpStack.pop();
      emptyBrackets = true;
    } else {
      if (tmpStack.length) emptyBrackets = false;
    }
    index++;
  }

  if (tmpStack.length) {
    return generResult(false, {
      text: `Unclosed at ${index}`,
      index: str.length
    });
  }

  return generResult(true, null);
};
