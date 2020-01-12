import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { isRightBrackets } from "./../../utils/predicates";
import { $ } from "./../../utils/dom";

import { createClassName } from "./utils";
import { state } from "./../../utils/consts";

const StackCellResolve = ({ children }) => {
	const [showAnim, updateAnimStatus] = useState(true);
	const [showDeleteAnim, updateDeleteAnimStatus] = useState(false);

	useEffect(() => {
		let items = $(".stack.def .stack-item:first-child");
		updateDeleteAnimStatus(isRightBrackets(items[0].innerText));
	});

	return (
		<li
			className={createClassName(state.resolve)}
			data-show-anim={showAnim.toString()}
			data-show-delete-anim={showDeleteAnim.toString()}
			onAnimationEnd={() => updateAnimStatus(false)}
		>
			{children}
		</li>
	);
};

StackCellResolve.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StackCellResolve;
