import React, { useState } from "react";
import PropTypes from "prop-types";

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

StackCell.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.oneOf([PropTypes.string, React.Children]).isRequired
};

export default StackCell;
