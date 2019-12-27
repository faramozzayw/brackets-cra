import React from "react";

const StackCell = ({ status, children }) => {
  const className = `
    stack-item 
    ${status} 
    has-text-centered 
    is-half
  `;

  return <li className={className}>{children}</li>;
};

export default StackCell;
