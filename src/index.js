import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SpeakerProvider } from "./Speaker";

ReactDOM.render(
  <React.StrictMode>
    <SpeakerProvider>
      <App />
    </SpeakerProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
