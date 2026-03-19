import { TextInput } from "./login/Input";
import { FormLabel } from "./Label";
export default function () {
  return (
    <div className="flex w-full items-center">
      <FormLabel htmlFor="password" className="">
        Password:
      </FormLabel>
      <div className="w-2/3 flex flex-col gap-1">
        <TextInput type="password" name="password" />
      </div>
    </div>
  );
}
