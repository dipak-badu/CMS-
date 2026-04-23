import type { ReactNode } from "react";
import { useAuth } from "../../lib/hooks/useAuth";

export default function AllowAccess({
  children,
  role,
}: Readonly<{ children: ReactNode; role: string }>) {
  const { authUser } = useAuth();
  if (authUser && authUser.role === role) {
    return children;
  } else {
    return <></>;
  }
}

// This component is used to wrap around any component that we want to restrict access to based on the user's role. For example, if we want to restrict access to a page that only admins should be able to access, we can wrap that page with the AllowAccess component and pass in the role prop as "admin". This way, only users with the admin role will be able to see the content of that page, while other users will see an empty page. This is a simple way to implement role-based access control in our application.
