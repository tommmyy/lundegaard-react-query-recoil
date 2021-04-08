import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import App from "./App";
import "./index.css";

render(
  <StrictMode>
    <Provider theme={defaultTheme}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
