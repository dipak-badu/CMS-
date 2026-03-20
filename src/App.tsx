import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";
import Logo from "./component/logo/Logo";

export default function Dashboard() {
  return (
    <section className="flex w-full h-screen rounded-md fixed">
      <div className="w-1/5 h-full bg-emerald-800  ">
        <div className="mt-2 h-12  flex gap-2  mx-2 justify-between ">
          <div className="flex gap-2">
            <Logo className="h-12 w-12 "></Logo>
            <span className="text-2xl text-green-100 font-bold mt-2 ">CMS</span>
          </div>
          <div className=" text-green-100 hover:cursor-pointer text-2xl mt-3">
            <GiHamburgerMenu />
          </div>
        </div>

        <hr className=" flex mx-auto shadow shadow-amber-100 mt-3   text-green-100" />
        <div className=" flex  flex-col gap-4 text-xl text-green-100 mt-4 ml-4">
          <div>
            <a href="dashboard">DashBoard </a>
          </div>
          <div>
            <a href="inqueries">Inqueries</a>
          </div>
          <div>
            <a href="order">Order</a>
          </div>
          <div>
            <a href="products">Products</a>
          </div>
          <div>
            <a href="customer">Customers</a>
          </div>
          <div>
            <a href="discount">Discount</a>
          </div>
          <div>
            <a href="payments">Payments</a>
          </div>
        </div>
      </div>
      {/* right side  */}

      <div className="w-4/5 bg-gray-200">
        <nav className="h-12 flex items-center mt-2 mx-4">
          <span className="text-2xl text-gray-500 font-bold   ">Dashboard</span>
          <div className="flex  w-full justify-end  gap-4 mr-8">
            {/* search  */}
            <div className="relative w-sm text-gray-500">
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-3 py-1 border rounded-full outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>
            {/* admin  */}
            <div>
              <IoIosNotifications />
            </div>
            <div>
              <a href="login" className=" transition hover:scale-98">
                Login
              </a>
            </div>
          </div>
        </nav>
        <hr className=" flex mx-auto shadow shadow-gray-900 mt-3   text-green-100" />
      </div>
    </section>
  );
}
