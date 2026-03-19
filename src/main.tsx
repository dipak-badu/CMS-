import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/global.css";
// import HomePage from "./pages/home/HomePage";
import RouterConfig from "./config/Router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterConfig />
  </StrictMode>,
);
