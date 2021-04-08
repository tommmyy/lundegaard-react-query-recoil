import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { Provider as ReactQueryProvider, QueryClient } from "react-query";
const queryClient = new QueryClient();

render(
  <StrictMode>
    <ReactQueryProvider queryClient={queryClient}>
      <Provider theme={defaultTheme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </Provider>
    </ReactQueryProvider>
  </StrictMode>,
  document.getElementById("root")
);
