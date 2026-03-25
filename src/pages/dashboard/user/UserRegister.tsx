import type { BaseSyntheticEvent } from "react";
import { useState } from "react";
import { FormLabel } from "../../../component/ui/form/Label";
import { TextInput } from "../../../component/ui/form/login/Input";
import Button from "../../../component/ui/form/Button";
import SelectOPtion from "../../../component/ui/form/login/Select";
import { UserSchema } from "../../../component/auth/Auth.contract";

export default function () {
  const [credentials, setCredentials] = useState({
    name: "",
    username: "",
    role: "",
    address: "",
    phone: "",
    image: "",
  });

  const submithandle = async (e: BaseSyntheticEvent) => {
    try {
      e.preventDefault();
      await UserSchema.parseAsync(credentials);
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
    <section className="flex flex-col h-auto rounded-lg my-10  w-full mx-auto bg-gray-800 text-white shadow-lg">
      <h1 className="text-3xl font-bold text-center pt-6">
        User Register Page
      </h1>
      <form
        onSubmit={submithandle}
        action=""
        className="flex  flex-col h-auto mx-4  py-6 gap-6"
      >
        <div className="flex w-full items-center  ">
          <FormLabel htmlFor="name" className="">
            Name:
          </FormLabel>
          <TextInput
            type="text"
            name="name"
            errMsg=""
            handleChange={handleInputChange}
            className="text-gray-950"
          />
        </div>

        <div className="flex w-full items-center  ">
          <FormLabel htmlFor="username" className="">
            User Name:
          </FormLabel>
          <TextInput
            type="email"
            name="username"
            errMsg=""
            handleChange={handleInputChange}
            className="text-gray-950"
          />
        </div>

        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="name" className="">
            Role:
          </FormLabel>
          <SelectOPtion />
        </div>
        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="address" className="">
            Address:
          </FormLabel>
          <TextInput
            type="text"
            name="address"
            errMsg=""
            handleChange={handleInputChange}
            className="text-gray-950"
          />
        </div>
        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="Number" className="">
            Number:
          </FormLabel>
          <TextInput
            type="tel"
            name="phone"
            errMsg=""
            handleChange={handleInputChange}
            className="text-gray-950"
          />
        </div>
        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="image" className="">
            Image:
          </FormLabel>
          <TextInput
            type="file"
            name="image"
            errMsg=""
            handleChange={handleInputChange}
            className="text-gray-950"
          />
        </div>
        <Button className=" hover:bg-teal-700 w-full bg-teal-800" type="submit">
          {" "}
          Submit{" "}
        </Button>
      </form>
    </section>
  );
}
