import React, { StrictMode } from "react";
import { render } from "react-dom";
import { Provider, defaultTheme } from "@adobe/react-spectrum";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider theme={defaultTheme}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
        <ReactQueryDevtools initialIsOpen={false} />
      </Provider>
    </QueryClientProvider>
  </StrictMode>,
  document.getElementById("root")
);
