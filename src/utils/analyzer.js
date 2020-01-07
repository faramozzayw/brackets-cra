import { right } from "./consts.js";
import Stack from "./Stack.js";
import { isLeftBrackets, isRightBrackets } from "./predicates";

const generResult = (status, error) => ({
	status,
	error,
});

const analyzer = str => {
	let strStack = new Stack([...str].reverse(), right);
	let tmpStack = new Stack();

	let emptyBrackets = true;
	let index = 1;
	let prevChar = "_";

	for (let char of strStack) {
		if (isLeftBrackets(char)) {
			tmpStack.push(char);
		} else if (isRightBrackets(char)) {
			if (tmpStack.empty()) {
				return generResult(false, {
					text: `Unclosed at ${index}`,
					index,
				});
			}

			if (emptyBrackets && isLeftBrackets(prevChar)) {
				return generResult(false, {
					text: `Empty at ${index}`,
					index,
				});
			}

			tmpStack.pop();
			emptyBrackets = true;
		} else {
			if (tmpStack.length) {
				emptyBrackets = false;
			}
		}

		index++;
		prevChar = char;
	}

	if (tmpStack.length) {
		return generResult(false, {
			text: `Unclosed at ${index}`,
			index: str.length,
		});
	}

	return generResult(true, null);
};

export default analyzer;
