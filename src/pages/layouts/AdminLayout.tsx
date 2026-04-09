import Logo from "../../component/logo/Logo";
import { LuCircleUserRound } from "react-icons/lu";
import { Outlet } from "react-router";
import AdminSidebar from "../../component/ui/sidebar/AdminSidebar";
import { useAuth } from "../../lib/hooks/useAuth";
export default function AminLayout() {
  const { authUser } = useAuth();
  return (
    <>
      <section className="w-full  h-screen bg-gray-400">
        <header className=" py-2 px-5 w-full shadow bg-gray-300  flex justify-between text-emerald-900 ">
          <div className="flex items-center gap-4">
            <Logo className=" h-10 w-10    "></Logo>
            <span className="text-2xl font-semibold  text-shadow-lg">
              PeaGo
            </span>
          </div>
          <div className="flex item-center gap-2 ">
            <div className="relative inline-flex">
              <span className="inline-flex  overflow-hidden rounded  shadow-sm">
                <button
                  type="button"
                  className=" flex items-center gap-3 text-sm font-medium transition-colors focus:relative cursor-pointer"
                >
                  <LuCircleUserRound className="size-8" />
                  <span>
                    {authUser?.firstName} {authUser?.lastName}
                  </span>
                </button>
              </span>

              <div
                role="menu"
                className=" hidden absolute enset-end-0 top-12 z-auto w-56 overflow-hidden rounded border border-gray-300 bg-white shadow-sm"
              >
                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Storefront
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Warehouse
                </a>

                <a
                  href="#"
                  className="block px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-gray-900"
                  role="menuitem"
                >
                  Stock
                </a>

                <button
                  type="button"
                  className="block w-full px-3 py-2 text-sm font-medium text-red-700 transition-colors hover:bg-red-50 ltr:text-left rtl:text-right"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </header>

        <main className="flex w-full gap-5">
          <AdminSidebar loggedInUser={authUser} />{" "}
          {/* Pass the loggedInUser as a prop to the AdminSidebar component. This way, the AdminSidebar component can access the loggedInUser details and render the sidebar items based on the user's role. For example, if the loggedInUser has an admin role, the AdminSidebar can render all the sidebar items, but if the loggedInUser has a different role, it can render only a subset of the sidebar items. This allows for role-based access control in the admin dashboard. */}
          <section className="w-full">
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}
