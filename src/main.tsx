import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/global.css";
// import HomePage from "./pages/home/HomePage";
import RouterConfig from "./config/Router";
// import { ToastProvider } from "./config/Toster";
import AuthProvider from "./context/provider/AuthProvider";
import { Toaster } from "sonner";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*  */}
    <Toaster richColors closeButton />
    <AuthProvider>
      <RouterConfig />
    </AuthProvider>
    <header>my name is dipak</header>
  </StrictMode>,
);
