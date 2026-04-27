// import SingelProductsGrid from "../../component/products/SingelProductsGrid";

import { useEffect, useMemo, useState } from "react";
import { NavLink, useParams } from "react-router";
import axiosInstance from "../../config/ApiClint";
import type { IproductDetails } from "../../component/products/SingelProductsGrid";

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>(); // Assuming slug is the product ID for simplicity
  const [product, setProduct] = useState<IproductDetails | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchProduct = async () => {
      if (!slug) {
        setError("Invalid product id.");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");

      try {
        const response = (await axiosInstance.get(
          `/products/${slug}`,
        )) as IproductDetails;
        // console.log(response);
        const payload = response?.IproductDetails ?? response;
        console.log("Payload:", payload);
        setProduct(payload as IproductDetails);
      } catch (err: any) {
        setError(
          err?.data?.message || err?.message || "Failed to load product.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  const discountedPrice = useMemo(() => {
    if (!product) return "0.00";
    return (product.price * (1 - product.discountPercentage / 100)).toFixed(2);
  }, [product]); // Calculate discounted price with memoization

  if (loading) {
    return (
      <section className="max-w-7xl mx-auto p-5 mt-10">
        <div className="animate-pulse grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 rounded-2xl h-96" />
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-1/4" />
            <div className="h-10 bg-gray-200 rounded w-3/4" />
            <div className="h-6 bg-gray-200 rounded w-1/2" />
            <div className="h-24 bg-gray-200 rounded" />
          </div>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="max-w-7xl mx-auto p-5 mt-10">
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-6">
          <p className="font-semibold">{error || "Product not found."}</p>
          <NavLink
            to="/products"
            className="inline-block mt-4 text-red-600 underline"
          >
            Back to products
          </NavLink>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-7xl mx-auto p-5 mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8">
        <div className="overflow-hidden rounded-xl bg-gray-100 h-96 flex items-center justify-center">
          {product.thumbnail || product.images?.[0] ? (
            <img
              src={product.thumbnail || product.images?.[0]}
              alt={product.title}
              className="size-full object-cover"
            />
          ) : (
            <span className="text-gray-500">Product Image</span>
          )}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            {product.brand && (
              <span className="text-xs bg-blue-50 text-blue-700 font-semibold px-2 py-1 rounded uppercase">
                {product.brand}
              </span>
            )}
            <span className="text-xs bg-gray-100 text-gray-700 font-medium px-2 py-1 rounded capitalize">
              {product.category}
            </span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {product.title}
          </h1>

          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-lg">
              {[...Array(5)].map((_, i: number) => (
                <span key={i}>
                  {i < Math.round(product.rating) ? " " : "☆"}
                </span>
              ))}
            </div>
            <span className="text-gray-600">({product.rating.toFixed(2)})</span>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <span className="text-3xl font-bold text-gray-900">
              ${discountedPrice}
            </span>
            <span className="text-lg text-gray-500 line-through">
              ${product.price}
            </span>
            <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-sm font-semibold">
              -{product.discountPercentage.toFixed(2)}%
            </span>
          </div>

          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div
            className={`inline-block py-2 px-3 rounded text-sm font-semibold w-fit ${
              product.stock > 0
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {product.availabilityStatus ||
              (product.stock > 0 ? "In Stock" : "Out of Stock")}
          </div>

          <div className="grid grid-cols-2 gap-4 py-4 border-y border-gray-200">
            <div>
              <p className="text-gray-500 text-sm">SKU</p>
              <p className="font-semibold">{product.sku || "N/A"}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Stock</p>
              <p className="font-semibold">{product.stock}</p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Weight</p>
              <p className="font-semibold">
                {product.weight ? `${product.weight} g` : "N/A"}
              </p>
            </div>
            <div>
              <p className="text-gray-500 text-sm">Warranty</p>
              <p className="font-semibold">
                {product.warrantyInformation || "N/A"}
              </p>
            </div>
          </div>

          {!!product.tags?.length && (
            <div className="flex gap-2 flex-wrap">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex gap-2 w-full text-center">
            <NavLink
              to="/cart"
              className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-3 px-4 rounded-lg transition mt-2"
            >
              Add to Cart
            </NavLink>
            <NavLink
              to="/checkout"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition mt-2"
            >
              Buy Now
            </NavLink>
          </div>

          <div className="bg-gray-50 border border-gray-100 p-4 rounded-lg space-y-2">
            <p className="text-sm">
              <span className="font-semibold">Shipping:</span>{" "}
              {product.shippingInformation || "Shipping info unavailable"}
            </p>
            <p className="text-sm">
              <span className="font-semibold">Returns:</span>{" "}
              {product.returnPolicy || "Return policy unavailable"}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
        <div className="space-y-4">
          {product.reviews?.length ? (
            product.reviews.map((review, index) => (
              <div
                key={index}
                className="border rounded-xl p-4 bg-white shadow-sm"
              >
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="font-semibold">{review.reviewerName}</p>
                    <div className="flex text-yellow-400 text-sm">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < review.rating ? "★" : "☆"}</span>
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-xs">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No reviews yet.</p>
          )}
        </div>
      </div>
    </section>
  );
}
