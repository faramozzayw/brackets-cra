import { left /* right, space */ } from "./consts.js";

export default class Stack {
  data = null;
  type = null;
  length = null;

  constructor(data = [], type = left) {
    this.data = [...data];
    this.type = type;
    this.length = data.length;
  }

  push = value => {
    this.length++;
    return this.data.push(value);
  };

  pop = () => {
    this.length--;
    return this.data.pop();
  };

  empty = () => this.data.length === 0;

  toString = () =>
    (this.data.toString()[Symbol.toPrimitive] = hint => {
      return hint === "string" ? this.data.toString() : NaN;
    });

  *[Symbol.iterator]() {
    for (let i = this.length - 1; i >= 0; i--) {
      yield this.data[i];
    }
  }
}
