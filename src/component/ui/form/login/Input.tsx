import type { BaseSyntheticEvent } from "react";
import type {
  ISelectOptionProps,
  ISingleOption,
  ITextInputProps,
  ITextAreadProps,
  IFileTypeProps,
} from "../Form.contract";

import { Controller } from "react-hook-form";

export const TextInput = ({
  type = "text",
  name,
  className = "",
  errMsg = "",
  control,
}: Readonly<ITextInputProps>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={""}
      render={(field: any) => {
        return (
          <>
            <input
              type={type}
              {...field}
              placeholder={`Enter your ${name}..`}
              className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
              // onChange={handleChange}
            />
            <span className="text-red-800 text-sm italic">{errMsg}</span>
          </>
        );
      }}
    ></Controller>
  );
};

export const SelectOption = ({
  name,
  className,
  errMsg,
  handleChange,
  options,
}: Readonly<ISelectOptionProps>) => {
  return (
    <>
      <select
        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white text-gray-600 ${className}`}
        onChange={handleChange}
        name={name}
      >
        <option value="">--Select Option--</option>
        {options &&
          options.map((option: ISingleOption, i: number) => (
            <option key={i} value={option.value}>
              {option.label}
            </option>
          ))}
      </select>
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );
};

export const TextArea = ({
  className,
  handleChange,
  name,
  errMsg,
  rows,
}: Readonly<ITextAreadProps>) => {
  return (
    <>
      <textarea
        name={name}
        placeholder={`Enter your ${name}..`}
        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white resize-none ${className}`}
        onChange={handleChange}
        rows={rows}
      ></textarea>
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );
};

export const FileInput = ({
  name,
  className = "",
  errMsg = "",
  handleChange,
}: Readonly<IFileTypeProps>) => {
  return (
    <>
      <input
        type={`file`}
        name={name}
        // multiple={true}
        placeholder={`Enter your ${name}..`}
        className={`border border-gray-300 w-full p-2 rounded-md shadow bg-white ${className}`}
        onChange={(e: BaseSyntheticEvent) => {
          // e.target.value  =>for all ohter
          //! for the file
          // const files = e.target.files; //? object of ojject as result
          const files = Object.values(e.target.files);
          handleChange(name, [files[0] as File]);
        }}
      />
      <span className="text-red-800 text-sm italic">{errMsg}</span>
    </>
  );
};
