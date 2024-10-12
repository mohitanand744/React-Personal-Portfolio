import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./assets/style/index.css";
import "./assets/style/responsive.css";
import StoreProvider from "./context/Store.jsx";
import Router from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreProvider>
      <Router />
    </StoreProvider>
  </StrictMode>
);
