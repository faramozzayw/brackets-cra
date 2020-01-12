import React from "react";
import PropTypes from "prop-types";

import { state } from "./../../utils/consts";

import NULL from "./NULL.jsx";
import Plain from "./Plain";

import Pending from "./Pending";
import Resolve from "./Resolve";
import Reject from "./Reject";

const _null_ = "null";

const Auto = ({ status, children }) => {
	switch (status) {
		case state.resolve:
			return <Resolve>{children}</Resolve>;
		case state.reject:
			return <Reject>{children}</Reject>;
		case state.pending:
			return <Pending>{children}</Pending>;
		case _null_:
			return <NULL />;
		default:
			return <Plain status={status}>{children}</Plain>;
	}
};

Auto.propTypes = {
	status: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
};

export default Auto;
