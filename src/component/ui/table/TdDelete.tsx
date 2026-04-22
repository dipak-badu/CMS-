import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import axiosInstance from "../../../config/ApiClint";
import type { IUserdetail } from "../../auth/Auth.contract";

export default function TdDelete({
  userId,
  users,
  setUsers,
}: {
  userId: number;
  users: IUserdetail[];
  setUsers: React.Dispatch<React.SetStateAction<IUserdetail[] | null>>;
}) {
  const handleDeleteConfirm = async (userId: number) => {
    try {
      const { isConfirmed } = (await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      })) as { isConfirmed: boolean };
      if (isConfirmed) {
        const response = (await axiosInstance.delete(
          `users/${userId}`,
        )) as IUserdetail;

        if (response) {
          const useFilter: Array<IUserdetail> = users?.filter(
            (user) => user.id !== response.id,
          ) as Array<IUserdetail>;
          // console.log(response.firstName);
          setUsers(useFilter);
        }
      }
    } catch (error) {
      toast.error("Error while deleting the user");
    }
  };
  return (
    <NavLink
      to={`/admin/user/delete`}
      className="flex items-center justify-center w-9 h-9 rounded-lg bg-red-500 text-white shadow-md hover:bg-red-600 hover:scale-105 transition duration-200"
      onClick={(e) => {
        e.preventDefault();
        handleDeleteConfirm(userId);
      }}
    >
      <MdDelete className="text-lg" />
    </NavLink>
  );
}

// we are creating a component for delete button in user list table and we are passing userId, users and setUsers as props to this component and we are using sweetalert2 for confirmation before deleting the user and we are using axiosInstance for making api call to delete the user and we are using react-hot-toast for showing toast message after deleting the user successfully or if there is an error while deleting the user
