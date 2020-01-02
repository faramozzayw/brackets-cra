import React, { useState } from "react";

const StackCell = ({ status, children }) => {
  const [showAnim, updateAnimStatus] = useState(true);

  const className = `
    stack-item 
    ${status} 
    has-text-centered 
    is-half
  `;

  return (
    <li
      className={className}
      data-show-anim={showAnim.toString()}
      onAnimationEnd={() => updateAnimStatus(false)}
    >
      {children}
    </li>
  );
};

export default StackCell;
