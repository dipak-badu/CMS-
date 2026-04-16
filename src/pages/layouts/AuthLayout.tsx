import { Outlet } from "react-router";
import Logo from "../../component/logo/Logo";
import { H1 } from "../../component/ui/typography/PageTitle";
import { useState } from "react";
import { useNavigate } from "react-router";

import { useEffect } from "react";
import { useAuth } from "../../lib/hooks/useAuth";

export default function AuthLayout() {
  const navigate = useNavigate();
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser && authUser.role) {
      navigate("/" + authUser.role);
    }
  }, [authUser]);

  const [pageContent, setPageContent] = useState({
    pageTitle: "Welcomem to  CMS!!",
    content:
      " Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitdoloremque accusantium facilis nostrum amet? Eveniet eius quae beataevoluptates odit ullam nostrum temporibus animi iusto laborum.Consectetur libero repudiandae quibusdam!",
    formTitle: "Sign In",
  });

  return (
    <section className=" bg-gray-300 flex h-screen p-5  gap-2  sm:flex sm:flex-row md:flex-row ">
      <div className="w-1/3 bg-emerald-800 rounded-md p-10 items-center justify-center flex flex-col gap-5 text-white">
        <Logo />
        <H1 className="text-green-100">{pageContent.pageTitle}</H1>
        <p className="text-center p-5">{pageContent.content}</p>
      </div>

      {/* right side panel  */}
      <div className="w-2/3 flex flex-col gap-10 bg-gray-100 p-10 rounded-md">
        <div className="flex border-b border-b-green-900/30 pb-5">
          <H1 className="text-green-900">
            <em>{pageContent.formTitle}</em>
          </H1>
        </div>
        <Outlet context={{ setPageContent }} />
      </div>
    </section>
  );
}
