import React from "react";
import PropTypes from "prop-types";

import { createClassName } from "./utils";

const StackCellPlain = ({ status, children }) => (
	<li className={createClassName(status)}>{children}</li>
);

StackCellPlain.propTypes = {
	status: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default StackCellPlain;
