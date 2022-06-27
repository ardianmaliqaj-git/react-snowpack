import "./index.css";

import HelloComponent from "./src/components/hello.jsx";

import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <HelloComponent />
  </React.StrictMode>
);
