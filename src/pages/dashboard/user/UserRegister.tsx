// import type { BaseSyntheticEvent } from "react";
// import { useState } from "react";
import toast from "react-hot-toast";
import { FormLabel } from "../../../component/ui/form/Label";
import {
  TextInput,
  SelectOption,
  TextArea,
  FileInput,
} from "../../../component/ui/form/login/Input";
import Button from "../../../component/ui/form/Button";
import {
  UserRegisterSchema,
  type IUserRegisterCredintial,
} from "../../../component/auth/Auth.contract";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function () {
  // const [credentials, setCredentials] = useState({
  //   name: "",
  //   username: "",
  //   role: "",
  //   address: "",
  //   phone: "",
  //   image: "",
  // });

  const submithandle = async (data: IUserRegisterCredintial) => {
    try {
      // e.preventDefault();
      // await UserSchema.parseAsync(credentials);
      toast.success("user rgistered successfully");
      reset();
    } catch (exception: any) {
      toast.error("something went wrong!!");
      console.log(exception);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IUserRegisterCredintial>({
    defaultValues: {
      name: "",
      username: "",
      gender: "",
      role: "",
      address: "",
      phone: "",
    },
    resolver: zodResolver(UserRegisterSchema),
  });

  return (
    <section className="flex flex-col h-auto rounded-lg w-full  wmx-auto bg-gray-800 text-white shadow-lg">
      <h1 className="text-3xl font-bold text-center pt-2">
        User Register Page
      </h1>
      <form
        onSubmit={handleSubmit(submithandle)}
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
            errMsg={errors?.name?.message}
            control={control}
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
            errMsg={errors?.username?.message}
            // handleChange={handleInputChange}
            control={control}
            className="text-gray-950"
          />
        </div>

        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="name" className="">
            Gender:
          </FormLabel>
          <SelectOption
            name="gender"
            control={control}
            errMsg={errors?.gender?.message}
            options={[
              { label: "Male", value: ",male" },
              { label: "Female", value: "femele" },
              { label: "Other", value: "other" },
            ]}
          />
        </div>

        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="name" className="">
            Role:
          </FormLabel>
          <SelectOption
            name="role"
            control={control}
            options={[
              { label: "Admin user", value: "admin" },
              { label: "User", value: "user" },
            ]}
          />
        </div>

        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="address" className="">
            Phone:
          </FormLabel>
          <TextInput
            type="tel"
            name="phone"
            errMsg={errors?.phone?.message}
            control={control}
            className="text-gray-950"
          />
        </div>
        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="Number" className="">
            Address:
          </FormLabel>
          <TextArea
            name="address"
            errMsg={errors?.address?.message}
            control={control}
            rows={4}
          />
        </div>
        <div className="flex w-full items-center justify-between ">
          <FormLabel htmlFor="image" className="">
            Image:
          </FormLabel>
          <FileInput
            name="image"
            errMsg={errors?.image?.message}
            control={control}
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
