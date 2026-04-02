import { NavLink } from "react-router";
import { CiEdit } from "react-icons/ci";
export default function TdEdit() {
  return (
    <NavLink
      to={`/admin/user/:id/edit`}
      className="flex items-center justify-center w-9 h-9 rounded-lg bg-blue-500 text-white shadow-md hover:bg-blue-600 hover:scale-105 transition duration-200"
    >
      <CiEdit className="text-lg" />
    </NavLink>
  );
}
