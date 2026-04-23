import SingelProductsGrid from "./../../component/products/SingelProductsGrid";
import { H1 } from "../../component/ui/typography/PageTitle";

export default function ProductList() {
  return (
    <>
      <section className="flex max-w-7xl mx-auto p-5 flex-col gap-5 mt-10 ">
        <H1>Product List</H1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 ">
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
          <SingelProductsGrid />
        </div>
      </section>
    </>
  );
}
