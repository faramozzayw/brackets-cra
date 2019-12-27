import React from "react";

import StackCell from "./StackCell.jsx";

const Stack = ({ type, name, data }) => {
  if (!data) return null;

  const list = [...data].reverse().map(el => {
    const key = `${el.value}×${type}@${name}`;

    return (
      <StackCell key={key} status={el.status}>
        {el.value}
      </StackCell>
    );
  });

  return (
    <article className="stack">
      <ul>
        {list}
        <StackCell status="null">NULL</StackCell>
      </ul>
    </article>
  );
};

export default Stack;