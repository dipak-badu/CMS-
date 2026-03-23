import Button from "../ui/form/Button";
import { TextInput } from "../ui/form/login/Input";
import { FormLabel } from "../ui/form/Label";
import { useState, type BaseSyntheticEvent } from "react";
import { LOginSchema } from "./Auth.contract";
export default function LoginForm() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const submitHandle = async (e: BaseSyntheticEvent) => {
    try {
      e.preventDefault();
      await LOginSchema.parseAsync(credentials);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e: BaseSyntheticEvent) => {
    const { name, value } = e.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  return (
    <form onSubmit={submitHandle} action="" className="flex flex-col gap-5">
      <div className="flex w-full items-center">
        <FormLabel htmlFor="username" className="">
          User Name:
        </FormLabel>

        <div className="w-2/3 flex flex-col gap-1">
          <TextInput
            type="email"
            name="username"
            handleChange={handleInputChange}
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
            handleChange={handleInputChange}
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
