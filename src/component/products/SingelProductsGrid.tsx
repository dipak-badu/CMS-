import { NavLink } from "react-router";

export interface ISingleReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}
export interface IproductDetails {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];

  brand: string;

  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Array<ISingleReview>;
  returnPolicy: string;
  minimumOrderQuantity: number;
  maximumOrderQuantity: number;
  meta: {
    createdAt: string | Date;
    updatedAt: string | Date;
    barcode: string;
    qrCode: string;
  };
  thumbnail: string;
  images: string[];
}

export default function SingelProductsGrid({
  product,
}: {
  product: IproductDetails;
}) {
  return (
    <div className="w-full border border-gray-100 rounded-xl shadow-sm flex flex-col overflow-hidden bg-white hover:shadow-md transition p-1">
      {/* Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="size-full object-cover"
      />

      {/* Content */}
      <div className="flex flex-col gap-2 px-3 py-2 grow">
        {/* Name */}
        <h3 className="font-medium line-clamp-2 text-lg">{product.title}</h3>
        <p className="text-gray-600 text-xs line-clamp-2  hover:line-clamp-none font-semibold">
          {product.description}
        </p>
        {/* Price */}
        <div className="text-lg font-semibold text-teal-900 flex flex-col lg:flex-row items-start lg:items-center gap-1">
          <span>
            {Intl.NumberFormat("np", {
              style: "currency",
              currency: "NPR",
            }).format(product.price)}{" "}
          </span>

          {product.discountPercentage && (
            <span className="text-sm text-red-600 line-through">
              {Intl.NumberFormat("np", {
                style: "currency",
                currency: "NPR",
              }).format(product.discountPercentage)}
            </span>
          )}
        </div>

        {/* View Details */}
        <NavLink
          to={`/product/${product.id}`}
          className="text-xs text-gray-500 hover:text-teal-900"
        >
          View Details
        </NavLink>
      </div>

      {/* Button */}
      <div className="flex gap-2 w-full">
        <NavLink
          to={`/product/${product.id}/buy`}
          className="text-sm text-white w-full text-center bg-teal-900/80 py-2 hover:bg-teal-600 transition rounded"
        >
          Add to Cart
        </NavLink>
        <NavLink
          to={`/product/${product.id}/add-to-wishlist`}
          className="text-sm text-white w-full text-center bg-red-900/80 py-2 hover:bg-red-600 transition rounded"
        >
          Buy Now
        </NavLink>
      </div>
    </div>
  );
}
