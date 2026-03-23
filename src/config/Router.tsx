import {
  //BrowserRouter,
  createBrowserRouter,
  // Route,
  RouterProvider,
  // Routes,
} from "react-router";
import HomePage from "../pages/home/HomePage";
import ForgetPassword from "../pages/home/auth/ForgetPassword";
import NOtFound from "../pages/error/NotFound";
import Dashboard from "../pages/dashboard/Dashboard";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  { path: "*", Component: NOtFound },
  { path: "/admin", Component: Dashboard },
]);

export default function RouterConfig() {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<HomePage />}></Route>
    //     <Route path="/forget-password" element={<ForgetPassword />}></Route>
    //   </Routes>
    // </BrowserRouter>
    <RouterProvider router={routerData} />
  );
}
