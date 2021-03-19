import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeakerProvider } from "./Speaker";
import { Provider } from "react-redux";
import { store } from "./Store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <SpeakerProvider>
        <App />
      </SpeakerProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
