import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// Force dark mode on root html element
if (typeof document !== "undefined") {
  document.documentElement.classList.add("dark");
}
