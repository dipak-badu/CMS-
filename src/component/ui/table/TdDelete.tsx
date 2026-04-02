import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router";
export default function () {
  return (
    <NavLink
      to={`/admin/user/delete`}
      className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 hover:scale-105 transition duration-200"
    >
      <MdDelete className="text-lg" />
    </NavLink>
  );
}
