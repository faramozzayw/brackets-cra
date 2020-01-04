import React from "react";
import ReactDOM from "react-dom";

import ErrorBoundary from "react-error-boundary";

import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <ErrorBoundary FallbackComponent={App}>
    <App />
  </ErrorBoundary>,
  rootElement
);
