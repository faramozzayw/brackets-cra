import React from "react";
import PropTypes from "prop-types";

import { createClassName } from "./utils";
import { state } from "./../../utils/consts";

const StackCellReject = ({ children }) => (
	<li className={createClassName(state.reject)}>{children}</li>
);

StackCellReject.propTypes = {
	children: PropTypes.node.isRequired,
};

export default StackCellReject;
