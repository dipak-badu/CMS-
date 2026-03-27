import Logo from "../../../component/logo/Logo";
import { H1 } from "../../../component/ui/typography/PageTitle";

import Button from "../../../component/ui/form/Button";
import { FormLabel } from "../../../component/ui/form/Label";
import { TextInput } from "../../../component/ui/form/login/Input";
import { useForm } from "react-hook-form";
import {
  LOginSchema,
  type ICredential,
} from "../../../component/auth/Auth.contract";
import { zodResolver } from "@hookform/resolvers/zod";
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

  return (
    <section className=" bg-gray-300 flex h-screen p-5  gap-2  sm:flex sm:flex-row md:flex-row ">
      <div className="w-1/3 bg-emerald-800 rounded-md p-10 items-center justify-center flex flex-col gap-5 text-white">
        <Logo />
        <H1 className="text-green-100 text-[30px]">Forget Password</H1>
        <p className="text-center p-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          doloremque accusantium facilis nostrum amet? Eveniet eius quae beatae
          voluptates odit ullam nostrum temporibus animi iusto laborum.
          Consectetur libero repudiandae quibusdam!
        </p>
      </div>
      <div className="w-2/3 flex flex-col gap-10 bg-gray-100 p-10 rounded-md">
        <div className="flex border-b border-b-green-900/30 pb-5">
          <H1 className="text-green-900 text-2xl">
            <em>Forget Password</em>
          </H1>
        </div>
        {/* //!login form component */}
        <form
          onSubmit={handleSubmit(submitHandle)}
          className="flex flex-col gap-5"
        >
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
                errMsg={errors?.username?.message}
              />
            </div>
          </div>
          <div className="flex w-full items-center gap-3 justify-end">
            <Button
              type="submit"
              className=" hover:bg-teal-700  bg-teal-800 w-2/3"
            >
              submit
            </Button>
          </div>
        </form>
      </div>
      );
    </section>
  );
}
