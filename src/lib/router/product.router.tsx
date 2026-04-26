import ProductLayout from "../../pages/layouts/ProductLayout";
import ProductDetail from "../../pages/products/ProductDetail";
import ProductList from "../../pages/products/ProductList";

export const ProductRouter = [
  {
    path: "/product",
    element: <ProductLayout />,
    children: [
      { index: true, Component: ProductList },
      { path: ":slug", Component: ProductDetail },
    ],
  },
];
