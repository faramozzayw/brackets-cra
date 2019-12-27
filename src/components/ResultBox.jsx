import React from "react";

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

export default ResultBox;
