import React from "react";
import "./index.css";
import App from "./App";
import ReactDOM from "react-dom";
import CounterProvider from "./CounterProvider";

ReactDOM.render(
  <CounterProvider>
    <App />
  </CounterProvider>,
  document.getElementById("root") as HTMLElement,
);
