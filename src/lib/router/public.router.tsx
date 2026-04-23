import HomePage from "../../pages/home/HomePage";
import ForgetPassword from "../../pages/home/auth/ForgetPassword";
import NOtFound from "../../pages/error/NotFound";
import AuthLayout from "../../pages/layouts/AuthLayout";

export const PublicRouter = [
  // { path: "/", element: <HomePage /> },
  // { path: "/forget-password", Component: ForgetPassword },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "forget-password", Component: ForgetPassword },
    ],
  },

  { path: "/*", Component: NOtFound },
];
