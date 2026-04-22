import { NavLink } from "react-router";
import type { IUserdetail } from "../../auth/Auth.contract";
// import { useAuth } from "../../../lib/hooks/useAuth";
import AllowAccess from "../../auth/AllowAccess";
export default function AdminSidebar({
  loggedInUser,
}: Readonly<{ loggedInUser: IUserdetail }>) {
  // const { authUser } = useAuth();
  return (
    <aside className="w-100 min-h-screen ">
      <div className="flex  flex-col justify-between border-gray-100 bg-gray-200 rounded-lg ">
        <div className="p-4">
          <ul className=" space-y-1">
            <AllowAccess role="admin">
              <li>
                <NavLink
                  to="/admin"
                  className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95 "
                  end
                >
                  Dasboard
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/admin/users"
                  className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
                >
                  Users
                </NavLink>
              </li>
            </AllowAccess>

            <li>
              <NavLink
                to="/admin/products"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700  transform transition-transform duration-200 hover:scale-95 "
                end
              >
                Products
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/menu"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Menu
              </NavLink>
            </li>

            <li>
              <NavLink
                to="admin/order"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Orders
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/inventory"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Inventory
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/invoices"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Invoices
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/admin/offers"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Offers
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="fixed inset-x-0 bottom-0   gray-100  w-83 ">
          <article className="flex items-center  gap-2 p-4  bg-gray-200 hover:bg-gray-300 ">
            <img
              alt=""
              src={
                loggedInUser?.image ||
                "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
              }
              className="size-10 rounded-full object-cover"
            />

            <div className=" dark:text-black">
              <article className="text-xs text-wrap">
                <strong className="block font-medium">
                  {loggedInUser?.firstName} {loggedInUser?.lastName}
                </strong>

                <span className=""> {loggedInUser?.email} </span>
              </article>
            </div>
          </article>
        </div>
      </div>
    </aside>
  );
}
