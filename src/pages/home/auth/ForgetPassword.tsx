import Button from "../../../component/ui/form/Button";
import { FormLabel } from "../../../component/ui/form/Label";
import { TextInput } from "../../../component/ui/form/login/Input";
import { useForm } from "react-hook-form";
import {
  LOginSchema,
  type ICredential,
} from "../../../component/auth/Auth.contract";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, type Dispatch, type SetStateAction } from "react";
import { useOutletContext } from "react-router";

type PageContentState = {
  pageTitle: string;
  content: string;
  formTitle: string;
};

type HomePageContext = {
  setPageContent: Dispatch<SetStateAction<PageContentState>>;
};

export default function ForgetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ICredential>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LOginSchema),
  });

  const submitHandle = (data: ICredential) => {
    try {
    } catch (exception: any) {
      console.log(exception);
    }
  };

  const { setPageContent } = useOutletContext<HomePageContext>();
  useEffect(() => {
    console.log("home page loaded");
    setPageContent({
      pageTitle: "Forget Password",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugitdoloremque accusantium facilis nostrum amet? Eveniet eius quae beataevoluptates odit ullam nostrum temporibus animi iusto laborum.Consectetur libero repudiandae quibusdam!",
      formTitle: "Forget Password",
    });
  });
  return (
    <form onSubmit={handleSubmit(submitHandle)} className="flex flex-col gap-5">
      <div className="flex w-full items-center">
        <FormLabel htmlFor="password" className="">
          Username:
        </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            type="email"
            name="username"
            control={control}
            errMsg={errors?.username?.message}
          />
        </div>
      </div>

      <div className="flex w-full items-center">
        <FormLabel htmlFor="password" className="">
          Password:
        </FormLabel>
        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            type="password"
            name="password"
            control={control}
            errMsg={errors?.password?.message}
          />
        </div>
      </div>
      <div className="flex w-full items-center gap-3 justify-end">
        <Button type="submit" className=" hover:bg-teal-700  bg-teal-800 w-2/3">
          submit
        </Button>
      </div>
    </form>
  );
}
this;
