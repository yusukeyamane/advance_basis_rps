import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Route from "./routes";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Route />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
