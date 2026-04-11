import type { ReactNode } from "react";
import { useAuth } from "../lib/hooks/useAuth";
import { Navigate } from "react-router";

export default function PermissionCheck({
  children,
  allowRole,
}: Readonly<{ children: ReactNode; allowRole: string }>) {
  const { authUser } = useAuth(); // this will give us the details of the logged in user, including their role. we can use this information to check if the user has the required role to access the page that they are trying to access. if the user's role does not match the allowRole prop, we can redirect them to their respective dashboard or show them an error message. this way we can ensure that only authorized users can access the pages that they are allowed to access, and we can also provide a better user experience by redirecting them to their respective dashboards instead of showing them an error message or a blank page.
  if (authUser && authUser.role !== allowRole) {
    return <Navigate to={"/" + authUser?.role} />;
  } else if (!authUser) {
    return <Navigate to="/" />;
  }

  return <> {children}</>;
}
