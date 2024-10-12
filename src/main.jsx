import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/style/index.css";
import "./assets/style/responsive.css";
import Router from "./Router/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router />
  </StrictMode>
);
