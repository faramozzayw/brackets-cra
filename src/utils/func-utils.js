import { space } from "./consts";

export function delay(fn, ms = 0) {
  return function() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          resolve(fn.apply(this, arguments));
        } catch (err) {
          reject(err);
        }
      }, ms);
    });
  };
}

export const getRandomArbitrary = (
  min = Number.MIN_SAFE_INTEGER,
  max = Number.MAX_SAFE_INTEGER
) => Math.random() * (max - min) + min;

export const strToCharCodes = str =>
  Array.from([...str].map(char => char.codePointAt(0)));

export const minifyStr = str =>
  `${[...str].filter(char => char.codePointAt(0) !== space).join("")}`;
