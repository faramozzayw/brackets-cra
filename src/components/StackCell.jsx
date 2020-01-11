import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { isRightBrackets } from "./../utils/predicates";
import { $ } from "./../utils/dom";

const createClassName = (...classes) =>
	`stack-item ${classes.join(" ")} has-text-centered is-half`;

const StackCell = ({ status, children }) => {
	const [showAnim, updateAnimStatus] = useState(true);
	const [showDeleteAnim, updateDeleteAnimStatus] = useState(false);

	useEffect(() => {
		if (status === "resolve") {
			let items = $(".stack.def .stack-item:first-child");
			updateDeleteAnimStatus(isRightBrackets(items[0].innerText));
		}
	});

	return (
		<li
			className={createClassName(status)}
			data-show-anim={showAnim.toString()}
			data-show-delete-anim={showDeleteAnim.toString()}
			onAnimationEnd={() => updateAnimStatus(false)}
		>
			{children}
		</li>
	);
};

StackCell.propTypes = {
	status: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default StackCell;
