import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./assets/css/global.css";
// import HomePage from "./pages/home/HomePage";
import RouterConfig from "./config/Router";
// import { ToastProvider } from "./config/Toster";
import AuthProvider from "./context/provider/AuthProvider";
import { Toaster } from "sonner";
import store from "./config/store";
import { Provider } from "react-redux";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/*  */}
    <Toaster richColors closeButton />
    <AuthProvider>
      <Provider store={store}>
        <RouterConfig />
      </Provider>
    </AuthProvider>
  </StrictMode>,
);

// do not use  context in large scale application because it will cause performance issues and it will also make the code more complex and difficult to maintain. instead of using context, we can use other state management libraries like redux, recoil, jotai etc. which are more efficient and easier to maintain in large scale applications.

// it is difficult the state management in large scale application because there are many components and many states that need to be managed. it is also difficult to manage the state in a way that is efficient and does not cause performance issues. it is also difficult to manage the state in a way that is easy to maintain and does not cause bugs. it is also difficult to manage the state in a way that is easy to test and does not cause issues with testing. it is also difficult to manage the state in a way that is easy to debug and does not cause issues with debugging. it is also difficult to manage the state in a way that is easy to understand and does not cause confusion for developers who are new to the project.
