import NULL from "./StackCell/NULL.jsx";

import Plain from "./StackCell/Plain";

import Pending from "./StackCell/Pending";
import Resolve from "./StackCell/Resolve";
import Reject from "./StackCell/Reject";

import Auto from "./StackCell/Auto";

const StackCell = Object.freeze({
	Resolve,
	Reject,
	Pending,
	NULL,
	Plain,
	Auto,
});

export default StackCell;
