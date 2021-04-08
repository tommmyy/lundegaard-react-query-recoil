import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";

render(
  <StrictMode>
    <Provider theme={defaultTheme}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Provider>
  </StrictMode>,
  document.getElementById("root")
);
