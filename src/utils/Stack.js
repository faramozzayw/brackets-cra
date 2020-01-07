import { left } from "./consts.js";

export default class Stack {
	constructor(data = [], type = left) {
		this.data = [...data];
		this.type = type;
		this.length = data.length;
	}

	push = value => {
		this.length++;
		this.data.push(value);
		return this;
	};

	pop = () => {
		this.length--;
		return this.data.pop();
	};

	empty = () => this.length === 0;

	toString = () => `[${this.data.join(", ")}]`;

	[Symbol.toPrimitive](hint) {
		return hint === "string" ? this.toString() : NaN;
	}

	*[Symbol.iterator]() {
		for (let i = this.length - 1; i >= 0; i--) {
			yield this.data[i];
		}
	}
}
