import { NavLink } from "react-router";
export default function AdminSidebar({ loggedInUser }) {
  return (
    <aside className="w-64">
      <div className="flex h-[90vh] flex-col justify-between border-e border-gray-100 bg-white dark:bg-gray-800 dark:text-emerald-50">
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
          <NavLink
            to="#"
            className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50"
          >
            <img
              alt=""
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?auto=format&amp;fit=crop&amp;q=80&amp;w=1160"
              className="size-10 rounded-full object-cover"
            />

            <div className=" dark:text-black">
              <p className="text-xs">
                <strong className="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </NavLink>
        </div>
      </div>
    </aside>
  );
}
