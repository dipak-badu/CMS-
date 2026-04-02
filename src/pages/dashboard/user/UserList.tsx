import { H1 } from "../../../component/ui/typography/PageTitle";
import { NavLink } from "react-router";
import { IoMdAdd } from "react-icons/io";
import TdEdit from "../../../component/ui/table/TdEdit";
import { CiSearch } from "react-icons/ci";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import TdDelete from "../../../component/ui/table/TdDelete";
export default function UserList() {
  return (
    <section className=" bg-white w-full mt-4   ">
      <div className=" flex justify-between items-center rounded-md border-b border-b-emerald-950/50 pt-1 pl-2">
        <H1 className="text-gray-600 text-[30px] p-3 rounded-md ">
          User Lists
        </H1>

        <div className="w-2/5 flex gap-3">
          <div className=" w-75 relative">
            <input
              type="search"
              className="px-3 py-2 w-full border border-gray-300 rounded-md shadow-sm pr-10 focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your search keyword..."
            />
            <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-lg text-gray-600" />
          </div>
          <NavLink
            to="/admin/user/create"
            className={`
        bg-teal-700 px-3 py-1  text-gray-300 flex items-center hover:cursor-pointer gap-1 rounded-md transiotn duration-500 hover:scale-95`}
          >
            <IoMdAdd />
            Add User
          </NavLink>
        </div>
      </div>

      <div className="w-full mt-5">
        <table className="w-full ">
          <thead className="bg-gray-300 text-gray-950 font-semibold ">
            <tr>
              <th className="border border-r-gray-500 border-b-gray-50 p-2 flex items-center justify-center ">
                Full Name
              </th>
              <th className="border-r border-r-gray-500 p-2 align-center">
                Email
              </th>
              <th className="border-r border-r-gray-500 p-2 align-center">
                Role
              </th>
              <th className="border-r border-r-gray-500 p-2 align-center">
                Status
              </th>
              <th className="border-r border-r-gray-500 p-2 align-center">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-600 p-2 text-center ">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center ">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center ">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center ">
                dipak badu
              </td>
              <td className="p-3 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>

            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
            <tr>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className="border border-gray-600 p-2 text-center">
                dipak badu
              </td>
              <td className=" border border-gray-600 p-2 text-center">
                <div className="flex justify-center items-center gap-3">
                  {/* Edit Button */}
                  <TdEdit />

                  {/* Delete Button */}
                  <TdDelete />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="flex w-full mt-5 justify-end">
        <ul className="flex gap-2   ">
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <LuChevronLeft />
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <span>1</span>
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <span>2</span>
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <span>3</span>
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <span>4</span>
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <span>4</span>
          </li>
          <li className=" bg-gray-100 flex items-center justify-center rounded-full shadow-lg size-7 cursor-p hover:bg-teal-700">
            <LuChevronRight />
          </li>
        </ul>
      </div>
    </section>
  );
}
