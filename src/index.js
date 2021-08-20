import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import { store } from "./store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  rootElement
);
