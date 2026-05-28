import ReactDOM from "react-dom/client";
import React from "react";
import "./index.css";
import App from "./App.jsx";

const root = document.getElementById("root");
if (root === null) throw new Error("Root element missing");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
