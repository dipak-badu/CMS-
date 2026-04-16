// class basse compontent
//?fuctional component  => stateless component
//!export(default(perfor this) , named)

import { useOutletContext } from "react-router";
import LoginForm from "../../component/auth/LoginForm";
import { useEffect, type Dispatch, type SetStateAction } from "react";

type PageContentState = {
  pageTitle: string;
  content: string;
  formTitle: string;
};

type HomePageContext = {
  setPageContent: Dispatch<SetStateAction<PageContentState>>;
};
export default function HomePage() {
  const { setPageContent } = useOutletContext<HomePageContext>();
  useEffect(() => {
    console.log("home page loaded");
    setPageContent({
      pageTitle: "Welcome to CMS!!",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitdoloremque accusantium facilis nostrum amet? Eveniet eius quae beataevoluptates odit ullam nostrum temporibus animi iusto laborum.Consectetur libero repudiandae quibusdam!",
      formTitle: "Sign In",
    });
  });
  return <LoginForm />;
}
