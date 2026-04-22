import { Outlet } from "react-router";
import AdminSidebar from "../../component/ui/sidebar/AdminSidebar";
import { useAuth } from "../../lib/hooks/useAuth";
import Header from "../../component/ui/header/Header";
// import { IUserdetail } from "./../../component/auth/Auth.contract";
export default function AminLayout() {
  const { authUser } = useAuth();
  return (
    <>
      <section className="w-full  bg-gray-200 items-stretch">
        <Header />
        <main className="flex w-full gap-5   bg-gray-300  mt-14  ">
          {authUser && <AdminSidebar loggedInUser={authUser} />}{" "}
          {/* Pass the loggedInUser as a prop to the AdminSidebar component. This way, the AdminSidebar component can access the loggedInUser details and render the sidebar items based on the user's role. For example, if the loggedInUser has an admin role, the AdminSidebar can render all the sidebar items, but if the loggedInUser has a different role, it can render only a subset of the sidebar items. This allows for role-based access control in the admin dashboard. */}
          <section className="w-full min-h-screen">
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}
