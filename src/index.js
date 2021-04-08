import React, { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);

reportWebVitals(console.log);
