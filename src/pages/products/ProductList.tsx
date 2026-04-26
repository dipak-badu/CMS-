import SingelProductsGrid, {
  type IproductDetails,
} from "./../../component/products/SingelProductsGrid";
import { H1 } from "../../component/ui/typography/PageTitle";
import { useEffect, useState } from "react";
import ProductSkeleton from "../../component/ui/skeleton/ProductSkeleton";
import axiosInstance from "../../config/ApiClint";

export default function ProductList() {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IproductDetails[]>([]);
  // Api integrate here to fetch products and setProducts
  const getAllProducts = async ({ limit = 40, skip = 0 }) => {
    try {
      const respponse = (await axiosInstance.get("products", {
        params: {
          limit: limit,
          skip: skip,
        },
      })) as { products: Array<IproductDetails> };
      console.log(respponse);
      setProducts(respponse.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllProducts({ limit: 40, skip: 0 });
  }, []);
  return (
    <>
      <section className="flex max-w-7xl mx-auto p-5 flex-col gap-5 mt-10  ">
        <H1>Product List</H1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          {loading
            ? [1, 2, 3, 4, 5, 6, 7, 8].map((i) => <ProductSkeleton key={i} />)
            : products &&
              products.map((product) => (
                <SingelProductsGrid key={product.id} product={product} />
              ))}
        </div>
      </section>
    </>
  );
}
