import Logo from "../../component/logo/Logo";
import { LuCircleUserRound } from "react-icons/lu";
import { Outlet } from "react-router";
import AdminSidebar from "../../component/ui/sidebar/AdminSidebar";
export default function AminLayout() {
  const loggedInUsser = {
    role: "admin",
    name: "dipak",
  };
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
                  <span>Dipak Badu</span>
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
          <AdminSidebar loggedInUser={loggedInUsser} />
          <section className="w-full">
            <Outlet />
          </section>
        </main>
      </section>
    </>
  );
}
