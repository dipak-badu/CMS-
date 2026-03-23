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
import UserLayout from "../pages/layouts/UserLaayout";
import UserReguster from "../pages/dashboard/user/UserRegister";

const routerData = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  {
    path: "admin",
    Component: AminLayout,
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: UserList },
      { path: "user/create", Component: UserReguster },
    ],
  },

  { path: "*", Component: NOtFound },

  {
    path: "/user",
    Component: UserLayout,
    children: [
      { index: true, element: <>User detal page</> },
      { path: "profile", element: <>User profile page</> },
    ],
  },
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
