import { Outlet } from "react-router";

export default function UserLayout() {
  return (
    <>
      header <Outlet /> Footer
    </>
  );
}
