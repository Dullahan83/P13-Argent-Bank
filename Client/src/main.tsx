import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import "./main.css";
import { store } from "./Redux/Store";
import { PersistGate } from "reduxjs-toolkit-persist/integration/react";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
   <React.StrictMode>
      <App />
   </React.StrictMode>
);
