import { Suspense } from "react";
import PermissionCheck from "../../config/PermissionCheck";
import UserLayout from "../../pages/layouts/UserLaayout";
export const UserRouter = [
  {
    path: "/user",
    element: (
      <Suspense fallback={<>Skeleton</>}>
        <PermissionCheck allowRole="user">
          <UserLayout />
        </PermissionCheck>
      </Suspense>
    ),
    children: [
      { index: true, element: <>User detal page</> },
      { path: "profile", element: <>User profile page</> },
    ],
  },
];
