import { TextInput } from "./login/Input";
import { FormLabel } from "./Label";

export default function () {
  return (
    <div className="flex w-full items-center">
      <FormLabel htmlFor="username" className="">
        User Name:
      </FormLabel>

      <div className="w-2/3 flex flex-col gap-1">
        <TextInput
          type="email"
          name=""
          // onChange={(e) => console.log(e.target.value)}
        />
      </div>
    </div>
  );
}
