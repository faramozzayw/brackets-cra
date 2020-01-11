import React from "react";
import PropTypes from "prop-types";

import StackCell from "./StackCell";

const Stack = ({ type, name, data }) => {
	if (!data || data.length === 0) return null;

	const list = [...data].reverse().map(el => {
		const key = `${el.value}×${type}@${name}:key?${el.key}`;
		const { status, value } = el;

		return (
			<StackCell.Auto key={key} status={status}>
				{value}
			</StackCell.Auto>
		);
	});

	return (
		<article className={`stack ${name}`}>
			<ul>
				{list}
				<StackCell.NULL />
			</ul>
		</article>
	);
};

Stack.propTypes = {
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	data: PropTypes.oneOfType([
		() => null,
		PropTypes.arrayOf(
			PropTypes.shape({
				key: PropTypes.number,
				status: PropTypes.string,
				value: PropTypes.string,
			}),
		),
	]),
};

export default Stack;
