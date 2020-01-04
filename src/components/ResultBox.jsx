import React from "react";
import PropTypes from "prop-types";

const ResultBox = ({ status, error }) => (
  <section className={`hero is-${status ? "primary" : "danger"}`}>
    <div className="hero-body">
      <div className="container">
        <h1 className="title">{status ? "Success" : "Error"}</h1>
        <h2 className="subtitle">{status ? "Ok" : error.text}</h2>
      </div>
    </div>
  </section>
);

ResultBox.propTypes = {
  status: PropTypes.bool.isRequired,
  error: PropTypes.oneOf([
    () => null,
    PropTypes.shape({
      text: PropTypes.string,
      index: PropTypes.number
    })
  ])
};

export default ResultBox;
