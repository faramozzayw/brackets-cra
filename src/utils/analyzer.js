import { right } from "./consts.js";
import Stack from "./Stack.js";

const analyzer = str => {
	const generResult = (status, error) => ({
		status,
		error,
	});

	const brackets = {
		left: "(",
		right: ")",
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
					index,
				});
			}

			if (emptyBrackets) {
				return generResult(false, {
					text: `Empty at ${index}`,
					index,
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
			index: str.length,
		});
	}

	return generResult(true, null);
};

export default analyzer;
