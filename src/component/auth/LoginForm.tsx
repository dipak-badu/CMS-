import Button from "../ui/form/Button";
import { TextInput } from "../ui/form/login/Input";
import { FormLabel } from "../ui/form/Label";
// import { useState, type BaseSyntheticEvent } from "react";
import { LOginSchema, type ICredential } from "./Auth.contract";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Password from "../ui/form/Password";
import Cookies from "js-cookie";
export default function LoginForm() {
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  const submitHandle = async (credintial: ICredential) => {
    try {
      // e.preventDefault();
      // await LOginSchema.parseAsync(credentials);
      const response = {
        token: "alphanumeric text",
      };
      //? web storage
      //!cookies, local storage, session storage
      //? cookies: small data, sent with every request, can be httpOnly, secure, sameSite -> clint side cookie and server side cookie

      //!js default
      document.cookie = `token=abc123; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/; secure; samesite=strict`;
      document.cookie =
        "token=" + response.token + "; expiresIn = " + new Date() + "path=/;";
      //!  using js-cookie
      //!set cookie
      // Cookies.set("token", response.token, {
      //   // domain:""
      //   path: "/",
      //   expires: 1,
      //   secure: true, //!onny transfer to server if https is available
      //   sameSite: "Lax", //!corssorigin uses
      // });
      //! remove cookie
      // Cookies.remove("token")
      //! get cookie
      // const data = Cookies.get("token");
      // console.log(data);

      //? local storage: larger data, persists until cleared, not sent with requests, accessible via JavaScript
      //! js default
      // localStorage.setItem("token", response.token);
      // localStorage.getItem("token");
      // localStorage.remove("token"); // keu token reomved
      // localStorage.clear(); //all localStorage items are removed

      //? session storage: similar to local storage but cleared when the page session ends (e.g., tab closed)
      // sessionStorage.setItem("token", response.token);
      // sessionStorage.getItem("token");
      // sessionStorage.removeItem("token");
      // sessionStorage.clear();

      console.log(credintial);
    } catch (exception: any) {
      console.log(exception);
    }
  };

  // const handleInputChange = (e: BaseSyntheticEvent) => {
  //   const { name, value } = e.target;
  //   setCredentials({
  //     ...credentials,
  //     [name]: value,
  //   });
  // };

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

  return (
    <form
      onSubmit={handleSubmit(submitHandle)}
      action=""
      className="flex flex-col gap-5"
    >
      <div className="flex w-full items-center">
        <FormLabel htmlFor="username" className="">
          User Name:
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
      <div className="flex w-full items-center justify-end">
        <a
          href="/forget-password"
          className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
        >
          Forgot password?
        </a>
      </div>
      <div className="flex w-full items-center gap-3">
        <Button className=" hover:bg-red-700 w-full bg-red-800" type="reset">
          Reset{" "}
        </Button>
        <Button className=" hover:bg-teal-700 w-full bg-teal-800" type="submit">
          submit{" "}
        </Button>
      </div>
    </form>
  );
}
