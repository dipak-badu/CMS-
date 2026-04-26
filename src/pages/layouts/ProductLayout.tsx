import { Outlet } from "react-router";
import Header from "../../component/ui/header/Header";

export default function ProductLayout() {
  return (
    <>
      <section className="w-full  bg-gray-200  ">
        <Header />
        <Outlet />
      </section>
    </>
  );
}
