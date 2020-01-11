import React from "react";

import NULL from "./StackCell/NULL.jsx";
import StackCellPlain from "./StackCell/StackCellPlain";

import StackCellPending from "./StackCell/StackCellPending";
import StackCellResolve from "./StackCell/StackCellResolve";
import StackCellReject from "./StackCell/StackCellReject";

import { state } from "./../utils/consts";

const PRE_StackCell = {
	Resolve: StackCellResolve,
	Reject: StackCellReject,
	Pending: StackCellPending,
	NULL,
	Plain: StackCellPlain,
	Auto: ({ status, children }) => {
		switch (status) {
			case state.resolve:
				return <StackCellResolve>{children}</StackCellResolve>;
			case state.reject:
				return <StackCellReject>{children}</StackCellReject>;
			case state.pending:
				return <StackCellPending>{children}</StackCellPending>;
			case "null":
				return <NULL />;
			default:
				return <StackCellPlain status={status}>{children}</StackCellPlain>;
		}
	},
};

const StackCell = Object.freeze(PRE_StackCell);

export default StackCell;
