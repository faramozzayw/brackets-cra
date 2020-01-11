import React from "react";
import PropTypes from "prop-types";

import { createClassName } from "./utils";
import { state } from "./../../utils/consts";

const StackCellPending = ({ children }) => (
	<li className={createClassName(state.pending)}>{children}</li>
);

StackCellPending.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StackCellPending;
