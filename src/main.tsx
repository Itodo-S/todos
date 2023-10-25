import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";

// STYLES
import "./index.scss";
import "../src/styles/global.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
