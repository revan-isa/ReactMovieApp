import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
