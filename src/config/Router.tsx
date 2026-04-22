import { createBrowserRouter, RouterProvider } from "react-router";
import { AdminRouter } from "../lib/router/admin.router";
import { UserRouter } from "../lib/router/user.router";
import { PublicRouter } from "../lib/router/public.router";
import { ProductRouter } from "../lib/router/product.router";

const routerData = createBrowserRouter([
  ...PublicRouter,
  ...AdminRouter,
  ...UserRouter,
  ...ProductRouter,
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

//? how role based routing is implemented in this code?
//? role based routing is implemented using the PermissionCheck component. this component takes the allowRole prop, which is the role that is allowed to access the page. it also uses the useAuth hook to get the details of the logged in user, including their role. if the user's role does not match the allowRole prop, it will redirect them to their respective dashboard or show them an error message. this way we can ensure that only authorized users can access the pages that they are allowed to access, and we can also provide a better user experience by redirecting them to their respective dashboards instead of showing them an error message or a blank page.
