import { NavLink } from "react-router";
import { H1 } from "../ui/typography/PageTitle";

interface IproductDetails {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  imageUrl: string;
}

export default function SingelProductsGrid({}) {
  return (
    <div className="w-full border border-gray-100 rounded-b-sm shadow flex flex-col ">
      <img
        src="https://images.pexels.com/photos/10957635/pexels-photo-10957635.jpeg"
        alt="image here "
        className=" size-75 object-cover rounded"
      ></img>
      <div className="flex flex-col gap-2 px-2 ">
        <h3 className="font-bold  font medium line-clamp-2 ">
          {" "}
          product name here
        </h3>
        <p className="text-lg font-semibold text-teal-900 flex flex-col md:flex-col  lg:flex-row items-start ">
          Npr.100,000,00
          <span className="text-md ms-0.5 text-red-800 line-through">
            Npr.120,000,00
          </span>
        </p>
        <NavLink
          to={`/products/slug`}
          className="text-sm text-gray-500 hover:text-teal-900"
        >
          View Details
        </NavLink>
      </div>
      <NavLink
        to={`/products/slug/buy`}
        className="text-sm text-gray-200 hover:text-teal-900 w-full text-center bg-red-900/80 py-2 rounded transition duration-300 hover:bg-red-600/80 mt-2"
      >
        Buy Now
      </NavLink>
    </div>
  );
}
