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
import AdminDashboard from "../pages/dashboard/Dashboard";
import UserList from "../pages/dashboard/user/UserList";

import AminLayout from "./../pages/layouts/AdminLayout";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  {
    path: "admin",
    Component: AminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: UserList },
    ],
  },

  { path: "*", Component: NOtFound },
  // { path: "/admin", Component: AdminDashboard },
  // { path: "/admin/users", Component: UserList },
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
