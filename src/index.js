import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import { Root } from "./components/root/root";
import { Context } from "./components/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Context>
      <Root></Root>
    </Context>
  </React.StrictMode>
);
