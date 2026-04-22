import { Suspense } from "react";
import PermissionCheck from "../../config/PermissionCheck";
import AminLayout from "../../pages/layouts/AdminLayout";
import UserList from "../../pages/dashboard/user/UserList";
import AdminDashboard from "../../pages/dashboard/Dashboard";
import UserDetail from "../../pages/dashboard/user/UserDetail";
import UserEdit from "../../pages/dashboard/user/UserEdit";
import UserRegister from "../../pages/dashboard/user/UserRegister";
import ProductList from "../../pages/products/ProductList";

export const AdminRouter = [
  {
    path: "admin",
    element: (
      <Suspense fallback={<>Skeleton</>}>
        {" "}
        {/* // this will show a skeleton loading state while the admin layout is
        being loaded. this is optional, but it can improve the user experience
        by providing feedback that something is happening in the background
        while the admin layout is being loaded. you can replace the{" "}
        <>Skeleton</> with any loading component or skeleton that you want to
        show while the admin layout is being loaded. */}
        <PermissionCheck allowRole="admin">
          {/* // this will check if the logged in user has the admin role before
          rendering the admin layout. if the user does not have the admin role,
          it will redirect them to their respective dashboard or show them an
          error message. this way we can ensure that only authorized users can
          access the admin layout and its child routes, and we can also provide
          a better user experience by redirecting them to their respective
          dashboards instead of showing them an error message or a blank page. */}
          <AminLayout />
        </PermissionCheck>
      </Suspense>
    ),
    children: [
      { index: true, Component: AdminDashboard },
      { path: "users", Component: UserList },
      { path: "user/create", Component: UserRegister },
      { path: "user/:id/edit", Component: UserEdit },
      { path: "user/:id/detail", element: <UserDetail /> },
      { path: "products", Component: ProductList },
    ],
  },
];
