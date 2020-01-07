import React, { useState } from "react";
import PropTypes from "prop-types";

const createClassName = (...classes) =>
	`stack-item ${classes.join(" ")} has-text-centered is-half`;

const StackCell = ({ status, children }) => {
	const [showAnim, updateAnimStatus] = useState(true);

	return (
		<li
			className={createClassName(status)}
			data-show-anim={showAnim.toString()}
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
