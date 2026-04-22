import Button from "../ui/form/Button";
import { TextInput } from "../ui/form/login/Input";
import { FormLabel } from "../ui/form/Label";
// import { useState, type BaseSyntheticEvent } from "react";
import {
  LOginSchema,
  type ICredential,
  type IUserdetail,
} from "./Auth.contract";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import Password from "../ui/form/Password";

import { NavLink, useNavigate } from "react-router";

import { useAuth } from "../../lib/hooks/useAuth";
import { toast } from "sonner";
export default function LoginForm() {
  const router = useNavigate();
  // const [credentials, setCredentials] = useState({
  //   username: "",
  //   password: "",
  // });

  // const submitHandle = async (credintial: ICredential) => {
  //   try {
  //     // e.preventDefault();
  //     // await LOginSchema.parseAsync(credentials);
  //     // const response = {
  //     //   token: "alphanumeric text",
  //     // };
  //     //? web storage
  //     //!cookies, local storage, session storage
  //     //? cookies: small data, sent with every request, can be httpOnly, secure, sameSite -> clint side cookie and server side cookie

  //     //!js default
  //     // document.cookie = `token=abc123; expires=${new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString()}; path=/; secure; samesite=strict`;
  //     // document.cookie =
  //     //   "token=" + response.token + "; expiresIn = " + new Date() + "path=/;";
  //     //!  using js-cookie
  //     //!set cookie
  //     // Cookies.set("token", response.token, {
  //     //   // domain:""
  //     //   path: "/",
  //     //   expires: 1,
  //     //   secure: true, //!onny transfer to server if https is available
  //     //   sameSite: "Lax", //!corssorigin uses
  //     // });
  //     //! remove cookie
  //     // Cookies.remove("token")
  //     //! get cookie
  //     // const data = Cookies.get("token");
  //     // console.log(data);

  //     //? local storage: larger data, persists until cleared, not sent with requests, accessible via JavaScript
  //     //! js default
  //     // localStorage.setItem("token", response.token);
  //     // localStorage.getItem("token");
  //     // localStorage.remove("token"); // keu token reomved
  //     // localStorage.clear(); //all localStorage items are removed

  //     //? session storage: similar to local storage but cleared when the page session ends (e.g., tab closed)
  //     // sessionStorage.setItem("token", response.token);
  //     // sessionStorage.getItem("token");
  //     // sessionStorage.removeItem("token");
  //     // sessionStorage.clear();
  //     // let response = await fetch(
  //     //   `${import.meta.env.VITE_APP_BASE_URL}auth/login`,
  //     //   {
  //     //     method: "POST",
  //     //     headers: { "Content-Type": "application/json" },
  //     //     body: JSON.stringify(credintial),
  //     //   },
  //     // );
  //     // response = await response.json();
  //     // console.log(response);

  //     //! axios
  //     const response = (await axiosInstance.post("auth/login", {
  //       ...credintial,
  //       expiresInMinutes: 24 * 60,
  //     })) as { accessToken: string };
  //     Cookies.set("auth_key", response.accessToken, {
  //       expires: 1,
  //       sameSiteme: "lax",
  //       secure: true,
  //     });

  //     const logedInUser = (await axiosInstance.get("auth/me")) as {
  //       role: string;
  //     };
  //     router("/" + logedInUser.role);
  //     console.log(logedInUser);
  //   } catch (exception: any) {
  //     console.log(exception);
  //   }
  // };

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
    formState: { errors, isSubmitting },
  } = useForm<ICredential>({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: zodResolver(LOginSchema),
  });

  const { login } = useAuth();

  const submitHandle = async (credential: ICredential) => {
    try {
      const loggedInUser = (await login(credential)) as IUserdetail;
      console.log(loggedInUser);
      if (loggedInUser) router("/" + loggedInUser.role);
      toast.success("Login successful!");
    } catch (exception) {
      console.error(exception);
      toast.error("Login failed. Please check your credentials and try again.");
    }
  };

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
            type="text"
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
        <NavLink
          to="/forget-password"
          className="text-teal-700 italic text-sm hover:underline hover:text-teal-600 transition hover:scale-96"
        >
          Forgot password?
        </NavLink>
      </div>
      <div className="flex w-full items-center gap-3">
        <Button className=" hover:bg-red-700 w-full bg-red-800" type="reset">
          Reset{" "}
        </Button>
        <Button
          className=" disabled:bg-red-900/20 disabled:cursor-not-allowed hover:bg-teal-700 w-full bg-teal-800"
          type="submit"
          disabled={isSubmitting}
        >
          submit{" "}
        </Button>
      </div>
    </form>
  );
}
