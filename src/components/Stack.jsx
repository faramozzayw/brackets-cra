import React from "react";
import PropTypes from "prop-types";

import StackCell from "./StackCell";

const Stack = ({ type, name, data }) => {
  if (!data || !data.length) return null;

  const list = [...data].reverse().map(el => {
    const key = `${el.value}×${type}@${name}:key?${el.key}`;
    const { status, value } = el;

    return (
      <StackCell key={key} status={status}>
        {value}
      </StackCell>
    );
  });

  return (
    <article className={`stack ${name}`}>
      <ul>
        {list}
        <StackCell status="null">NULL</StackCell>
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
        value: PropTypes.string
      })
    )
  ])
};

export default Stack;
