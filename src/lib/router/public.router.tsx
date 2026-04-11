import HomePage from "../../pages/home/HomePage";
import ForgetPassword from "../../pages/home/auth/ForgetPassword";
import NOtFound from "../../pages/error/NotFound";
export const PublicRouter = [
  { path: "/", element: <HomePage /> },
  { path: "/forget-password", Component: ForgetPassword },
  { path: "*", Component: NOtFound },
];
