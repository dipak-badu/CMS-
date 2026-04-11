import { NavLink } from "react-router";
import type { IUserdetail } from "../../auth/Auth.contract";
// import { useAuth } from "../../../lib/hooks/useAuth";
export default function AdminSidebar({
  loggedInUser,
}: Readonly<{ loggedInUser: IUserdetail }>) {
  // const { authUser } = useAuth();
  return (
    <aside className="w-100">
      <div className="flex h-[90vh] flex-col justify-between border-e border-gray-100 bg-white  ">
        <div className="p-4">
          <ul className=" space-y-1">
            {loggedInUser && loggedInUser.role === "admin" && (
              <li>
                <NavLink
                  to="/admin"
                  className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95 "
                  end
                >
                  Dasboard
                </NavLink>
              </li>
            )}

            <li>
              <NavLink
                to="/admin/food-items"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700  transform transition-transform duration-200 hover:scale-95 "
                end
              >
                Food Items
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
                to="/admin/users"
                className="block rounded-lg bg-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transform transition-transform duration-200 hover:scale-95"
              >
                Users
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

        <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 ">
          <article className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
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
