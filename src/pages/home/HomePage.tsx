// class basse compontent
//?fuctional component  => stateless component
//!export(default(perfor this) , named)

import LeftSidePanel from "../../component/auth/LeftSidePanel";
import RightSidePanel from "../../component/auth/RightSidePanel";

export default function HomePage() {
  return (
    <section className=" bg-gray-300 flex h-screen p-5  gap-2  sm:flex sm:flex-row md:flex-row ">
      <LeftSidePanel />
      <RightSidePanel />
    </section>
  );
}
